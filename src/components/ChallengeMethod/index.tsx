import React from 'react';
import Image from 'next/image';
import * as S from './style';
import { METHOD_CONTENT, COMMENTS, SLIDER } from '@constants/word';
import { Label } from '@components/Label';
import { Carousel } from '@components/Carousel';
import Colors from '@constants/Colors';

export interface IChallengeMethodProps {
  registerCount: number;
}

export interface ICarouselSettingProps {
  dragSpeed: number;
  itemSideOffsets: number;
  children?: React.ReactNode;
}

const setting: ICarouselSettingProps = {
  dragSpeed: 1.25,
  itemSideOffsets: 15,
};

export const ChallengeMethod: React.FC<IChallengeMethodProps> = ({
  registerCount,
}) => {
  return (
    <S.Container>
      <S.Count>
        <Label
          backgroundColor={Colors.red0}
          color={Colors.mainPink}
          fontWeight={700}
          size={18}
          padding={15}
          borderRadius={8}
        >{`현재 챌린지 신청자 ${registerCount}명`}</Label>
      </S.Count>
      <S.Content>
        <S.ContentWrapper>
          {METHOD_CONTENT.map((word, index) => (
            <Label
              key={word}
              size={20}
              fontWeight={700}
              margin={`0 0 ${index % 2 === 0 ? '8px' : '16px'} 0`}
            >
              {word}
            </Label>
          ))}
        </S.ContentWrapper>
        <S.ImageWrapper>
          <Image
            src="/images/emoji.png"
            height={100}
            width={100}
            layout="responsive"
            loading="eager"
            alt="emoji"
          ></Image>
        </S.ImageWrapper>
      </S.Content>
      <S.Comment>
        {COMMENTS.map((comment) => (
          <Label
            key={comment}
            backgroundColor={Colors.newGray200}
            color={Colors.newGray900}
            padding={10}
            borderRadius={8}
            margin={'0 0 8px 0'}
          >
            {comment}
          </Label>
        ))}
      </S.Comment>
      <Carousel {...setting}>
        {SLIDER.map((image, index) => (
          <S.Image src={image} alt="image" key={index} />
        ))}
      </Carousel>
    </S.Container>
  );
};
