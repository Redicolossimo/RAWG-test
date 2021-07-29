import styled from "styled-components";

export const GameFilters = styled.div`
  padding: 8px 0;
  display: flex;
  position: sticky;
  top: 60px;
  background: linear-gradient(125deg, rgba(23,0,36,0.9962185557816877) 0%, rgba(96,9,121,1) 46%, rgba(45,11,74,0.9233894241290266) 100%);
`;

export const GameCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const GameCardWrapper = styled.div`
  cursor: pointer;
  background: linear-gradient(125deg, rgba(23,0,36,0.9962185557816877) 0%, rgba(96,9,121,1) 46%, rgba(45,11,74,0.9233894241290266) 100%);
  border-radius: 12px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.07);
  overflow: hidden;
  margin-top: 1rem;
  color: #fff;
  flex-basis: 100%;

  @media (min-width: 720px) {
    flex-basis: 32%;
  }

  @media (min-width: 1140px) {
    flex-basis: 24%;
  }
`;

export const GameCardMedia = styled.div`
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const GameCardInfo = styled.div`
  padding: 16px;
`;

export const GameCardInfoMeta = styled.div`
  margin-bottom: 7px;
`;

export const GameCardInfoHeading = styled.div`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 8px;
  padding-bottom: 2px;
`;

export const GamePlatformTag = styled.div`
  display: inline-block;
  background-color: hsla(0, 0%, 100%, 0.07);
  padding: 4px 6px;
  margin-right: 4px;
`;

export const LoadMoreButton = styled.button`
  background-color: hsla(0, 0%, 100%, 0.07);
  padding: 10px 16px;
  border-radius: 4px;
  color: #fff;
  border: none;
  text-transform: uppercase;
  width: 100%;
  margin: 1rem auto;
`;
