import React from 'react';
import * as S from './style';
import Image from 'next/image';
import { Label } from '@components/Label';

interface ITimeProps {
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export interface IIntroProps {
  // timeData: ITimeProps;
  imageUrl: string;
}

export const Intro: React.FC<IIntroProps> = ({ imageUrl }) => {
  return (
    <S.Container>
      <Image
        src={imageUrl}
        alt="intro"
        width={10}
        height={14}
        layout="responsive"
        objectFit="cover"
        loading="eager"
      />
      <S.Information>
        <Label>asd</Label>
      </S.Information>
    </S.Container>
  );
};
