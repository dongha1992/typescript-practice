import React from 'react';
import * as S from './style';
import Image from 'next/image';
import { Label } from '@components/Label';
import { Timer } from '@components/Timer';

interface ITimeProps {
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export interface IIntroProps {
  timeData: ITimeProps;
  imageUrl: string;
}

export const Intro: React.FC<IIntroProps> = ({ timeData, imageUrl }) => {
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
        <Label size={20} weight={700} margin="0 0 20px 0">
          더 나은 내일을 위한 첫 번째 도전
        </Label>
        <Label size={28} weight={700} margin="0 0 4px 0">
          총 상금 500만 원
        </Label>
        <Label size={28} weight={700} margin="0 0 28px 0">
          미라클모닝 챌린지
        </Label>
        <Label size={14} margin="0 0 24px 0">
          2주동안 아침 6시 기상 100% 성공하면 특별 상금!
        </Label>
        <Timer
          day={timeData.day}
          hour={timeData.hour}
          minute={timeData.minute}
          second={timeData.second}
        />
      </S.Information>
    </S.Container>
  );
};
