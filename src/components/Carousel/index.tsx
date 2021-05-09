import React, { useState, useRef } from 'react';
import { ICarouselSettingProps } from '@components/ChallengeMethod';
import * as S from './style';

export const Carousel: React.FC<ICarouselSettingProps> = (props) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [transLeftOffset, setTransLeftOffset] = useState(null);
  const [speed, setSpeed] = useState(props.dragSpeed);

  const ref = useRef();
  const handleMouseDown = () => {};
  const handleMouseLeave = (e) => {
    handleSnap();
  };
  const handleMouseUp = (e) => {
    handleSnap();
  };
  const handleMouseMove = () => {};

  const handleSnap = () => {
    console.log('work');
  };

  const getValue = () => {};

  return (
    <S.Container
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <S.Carousel>{props.children}</S.Carousel>
    </S.Container>
  );
};
