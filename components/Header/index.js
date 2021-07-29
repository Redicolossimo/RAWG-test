import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import * as S from "./styles";

export function Header() {
  const router = useRouter();
  const $searchRef = useRef(null);
  function handleSearch(e) {
    e.preventDefault();
    router.push({
      pathname: "/",
      query: { ...router.query, search: $searchRef.current.value },
    });
  }
  return (
    <S.Header>
      <S.HeaderBrand>
        <Link href="/" passHref>
          <S.HeaderBrandLink>rawg</S.HeaderBrandLink>
        </Link>
      </S.HeaderBrand>
      <S.HeaderSearchFrom onSubmit={handleSearch}>
        <S.HeaderSearchInput
          ref={$searchRef}
          name="search"
          placeholder="Search"
          type="search"
        />
      </S.HeaderSearchFrom>
    </S.Header>
  );
}
