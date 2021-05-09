import React, { useState, useRef } from 'react';
import { ICarouselSettingProps } from '@components/ChallengeMethod';

export const Carousel: React.FC<ICarouselSettingProps> = (props) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [transLeftOffset, setTransLeftOffset] = useState(null);
  const [speed, setSpeed] = useState(props.dragSpeed);

  return <div></div>;
};
