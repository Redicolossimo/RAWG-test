import { useRouter } from "next/router";
import { Slider } from "../../components/GameDetails/Slider";
import { GameDescription, GameLink } from "../../components/GameDetails/styles";
import config from "../../next.config";

export default function GameDetailsPage(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Slider screenshots={props.screenshots} />
      <GameDescription
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
      <GameLink href={props.website}>Website</GameLink>
    </div>
  );
}

export async function getStaticProps(context) {
  const details = await fetch(
    `https://api.rawg.io/api/games/${context.params.slug}?key=${config.api.key}`
  ).then((res) => res.json());

  const screenshots = await fetch(
    `https://api.rawg.io/api/games/${context.params.slug}/screenshots?key=${config.api.key}`
  ).then((res) => res.json());

  return {
    props: {
      description: details.description,
      website: details.website,
      screenshots: screenshots.results,
    },
  };
}

export async function getStaticPaths() {
  const games = await fetch(`https://api.rawg.io/api/games?key=${config.api.key}`).then((res) =>
    res.json()
  );
  const paths = games.results.map((game) => ({
    params: { slug: game.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}
