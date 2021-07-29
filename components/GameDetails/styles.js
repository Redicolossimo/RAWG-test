// @ts-nocheck
import styled from "styled-components";

export const Slider = styled.div`
  overflow-x: hidden;
  width: 100%;
`;

export const SliderButtonsWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
`;

export const SliderButton = styled.button`
  background-color: hsla(0, 0%, 100%, 0.07);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  font-size: 1.5rem;
  margin: 0 8px;
  cursor: pointer;
`;

export const SliderImageWrapper = styled.div`
  justify-content: center;
  display: flex;

  & > img {
    max-width: 100%;
    max-height: 500px;
  }
`;

export const SliderThumbsWrapper = styled.div`
  overflow-x: auto;
  display: flex;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SliderThumbImage = styled.img`
  padding: 1rem;
  max-width: 30%;
  max-height: 200px;
  scroll-snap-align: center;
  cursor: pointer;
  filter: brightness(0.5);

  ${(props) => {
    return {
      filter: props.active ? "none" : "brightness(.5)",
    };
  }}
`;

export const GameDescription = styled.h4`
  color: #fff;
`;

export const GameLink = styled.a`
  color: #fff;
`;
