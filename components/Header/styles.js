import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: #151515;
`;

export const HeaderBrand = styled.div`
  padding-left: 10px;
`;

export const HeaderBrandLink = styled.a`
  color: #fff;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 5px;
  font-weight: 900;
`;

export const HeaderSearchFrom = styled.form`
  flex: 1;
  padding: 0 12px 0 24px;
`;

export const HeaderSearchInput = styled.input`
  color: hsla(0, 0%, 100%, 0.6);
  width: 100%;
  opacity: 1;
  padding: 0 12px 0 38px;
  height: 28px;
  border-radius: 16px;
  line-height: 14px;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIG9wYWNpdHk9Jy40JyB3aWR0aD0nMzEnIGhlaWdodD0nMzEnIHZpZXdCb3g9JzAgMCAxNCAxNCc+PHBhdGggZmlsbD0nI0ZGRicgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNOS4yMDIgMy4wMjZhNC4zNjcgNC4zNjcgMCAxMC02LjE3NiA2LjE3NiA0LjM2NyA0LjM2NyAwIDEwNi4xNzYtNi4xNzZtNC41NDMgMTAuNzE5YS44NzUuODc1IDAgMDEtMS4yMzYgMGwtMi43NTEtMi43NTJjLTIuMzk1IDEuNzktNS43OTEgMS42MjEtNy45NjctLjU1NWE2LjExMyA2LjExMyAwIDAxMC04LjY0NyA2LjExMyA2LjExMyAwIDAxOC42NDcgMGMyLjE3NiAyLjE3NiAyLjM0NiA1LjU3Mi41NTUgNy45NjdsMi43NTIgMi43NTFjLjM0LjM0MS4zNC44OTQgMCAxLjIzNicvPjwvc3ZnPg==)
    no-repeat scroll 16px;
  background-color: hsla(0, 0%, 100%, 0.16);
  background-size: 14px;
  border: none;
  transition: color 0.3s, background-color 0.3s, opacity 0.3s;

  &:hover {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNCcgaGVpZ2h0PScxNCcgdmlld0JveD0nMCAwIDE0IDE0Jz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J005LjIwMiAzLjAyNmE0LjM2NyA0LjM2NyAwIDEwLTYuMTc2IDYuMTc2IDQuMzY3IDQuMzY3IDAgMTA2LjE3Ni02LjE3Nm00LjU0MyAxMC43MTlhLjg3NS44NzUgMCAwMS0xLjIzNiAwbC0yLjc1MS0yLjc1MmMtMi4zOTUgMS43OS01Ljc5MSAxLjYyMS03Ljk2Ny0uNTU1YTYuMTEzIDYuMTEzIDAgMDEwLTguNjQ3IDYuMTEzIDYuMTEzIDAgMDE4LjY0NyAwYzIuMTc2IDIuMTc2IDIuMzQ2IDUuNTcyLjU1NSA3Ljk2N2wyLjc1MiAyLjc1MWMuMzQuMzQxLjM0Ljg5NCAwIDEuMjM2Jy8+PC9zdmc+);
    background-color: #fff;
    color: #000;
  }
`;
