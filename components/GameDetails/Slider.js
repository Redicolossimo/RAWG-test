// @ts-nocheck
import { useState } from "react";
import * as S from "./styles";

export function Slider({ screenshots }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentImg = screenshots[activeIdx];
  if (screenshots.length === 0) return null;
  return (
    <S.Slider>
      <S.SliderButtonsWrapper>
        <S.SliderButton
          onClick={() =>
            setActiveIdx((idx) =>
              idx === 0 ? screenshots.length - 1 : idx - 1
            )
          }
        >
          &lt;
        </S.SliderButton>
        <S.SliderButton
          onClick={() =>
            setActiveIdx((idx) =>
              idx === screenshots.length - 1 ? 0 : idx + 1
            )
          }
        >
          &gt;
        </S.SliderButton>
      </S.SliderButtonsWrapper>
      <S.SliderImageWrapper>
        <img key={currentImg.id} src={currentImg.image} />
      </S.SliderImageWrapper>
      <S.SliderThumbsWrapper>
        {screenshots.map((shot, idx) => (
          <S.SliderThumbImage
            onClick={() => setActiveIdx(idx)}
            active={idx === activeIdx}
            key={shot.id}
            src={shot.image}
          />
        ))}
      </S.SliderThumbsWrapper>
    </S.Slider>
  );
}
