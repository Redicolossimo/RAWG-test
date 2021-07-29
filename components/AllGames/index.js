// @ts-nocheck
import config from './../../next.config';
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useSWRInfinite } from "swr";
import { useOnScreen } from "../../hooks/useOnScreen";
import { GameOrder } from "../GameOrder";
import { Platforms } from "../Platforms";
import {
  GameCards,
  GameCardInfo,
  GameCardInfoHeading,
  GameCardInfoMeta,
  GameCardMedia,
  GameCardWrapper,
  GameFilters,
  GamePlatformTag,
  LoadMoreButton,
} from "./styles";

const getKey = (pageIndex, previousPageData, query) => {
  // reached the end
  if (previousPageData && !previousPageData.results) return null;
  const ordering = `ordering=${query.order || "-released"}`;
  const platforms = `&platforms=${query.platform || 4 }`;
  const search = query.search ? `&search=${query.search}` : "";
  // first page, we don't have `previousPageData`
  if (pageIndex === 0)
    return `https://api.rawg.io/api/games?${ordering}${platforms}${search}&key=${config.api.key}`;
  // add the cursor to the API endpoint
  return previousPageData.next;
};

export function AllGamesContainer() {
  const router = useRouter();
  const { data, size, setSize } = useSWRInfinite(
    (idx, prevData) => getKey(idx, prevData, router.query),
    (url) => fetch(url).then((res) => res.json())
  );
  const $loadMoreButton = useRef(null);
  const isOnScreen = useOnScreen($loadMoreButton, "200px");
  const isLoadingMore =
    !data || (size > 0 && typeof data[size - 1] === "undefined");

  function handleFiltersChange({ target: { name, value } }) {
    const query = { ...router.query };
    if (value) {
      query[name] = value;
    } else {
      delete query[name];
    }
    router.push({ pathname: "/", query });
  }

  useEffect(() => {
    if (isOnScreen) setSize(size + 1);
  }, [isOnScreen]);
  return (
    <div>
      <GameFilters>
        <GameOrder
          value={router.query.order}
          handleChange={handleFiltersChange}
        />
        <Platforms
          value={router.query.platform}
          handleChange={handleFiltersChange}
        />
      </GameFilters>
      <GameCards>
        {data?.map((games) => {
          return games.results.map((game) => (
            <GameCardWrapper
              key={game.id}
              onClick={() => router.push(`/game/${game.slug}`)}
            >
              <GameCardMedia>
                {game.background_image ? (
                  <img
                    src={game.background_image}
                    alt={game.name}
                    className="c-img-full"
                  />
                ) : (
                  <img
                    src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
                    width="100%"
                    alt="no-image"
                  />
                )}
              </GameCardMedia>
              <GameCardInfo>
                {game.platforms.map((p) => (
                  <GamePlatformTag key={p.platform.id}>
                    {p.platform.name}
                  </GamePlatformTag>
                ))}
                <GameCardInfoHeading>{game.name}</GameCardInfoHeading>
                <GameCardInfoMeta>
                  <span>Released: </span>
                  {game.released}
                </GameCardInfoMeta>
                <GameCardInfoMeta>
                  <span>Rating: </span>
                  {game.rating}
                </GameCardInfoMeta>
              </GameCardInfo>
            </GameCardWrapper>
          ));
        })}
      </GameCards>
      <LoadMoreButton
        disabled={isLoadingMore}
        ref={$loadMoreButton}
        onClick={() => setSize(size + 1)}
      >
        {isLoadingMore ? "Loading..." : "Load more"}
      </LoadMoreButton>
    </div>
  );
}
