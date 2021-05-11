import React from 'react';
import { Label } from '@components/Label';
import Image from 'next/image';

import { AuthenticationExample, Goal } from 'src/types/ChallengeType';
import { dayFormatter } from '@tools/getDay';
import * as S from './style';

export interface IAuthenticationMethodProps {
  startDate: string;
  endDate: string;
  authenticationGoodExamples: AuthenticationExample[];
  authenticationBadExamples: AuthenticationExample[];
  authenticationMethod: string;
  achievementImageUrls: string[];
  goal: Goal;
}

export const AuthenticationMethod: React.FC<IAuthenticationMethodProps> = ({
  startDate,
  endDate,
  authenticationGoodExamples,
  authenticationBadExamples,
  achievementImageUrls,
  goal,
}) => {
  console.log(authenticationGoodExamples, 'authenticationGoodExamples');
  return (
    <S.Container>
      <S.Wrapper>
        <Label>챌린지 기간</Label>
        <Label>{dayFormatter(startDate)}</Label>
      </S.Wrapper>
      <S.Wrapper>
        <Label>이렇게 찍어주세요!</Label>
        <S.ImageContainer>
          <S.Grid>
            {authenticationBadExamples.map((data) => (
              <div>
                <S.Image
                  src={data.image}
                  alt="image"
                  width={150}
                  height={150}
                />
                {data.text}
              </div>
            ))}
          </S.Grid>
        </S.ImageContainer>
      </S.Wrapper>
      <S.Wrapper>
        <Label>지난 인증샷</Label>
      </S.Wrapper>
      <S.Wrapper>
        <Label>이렇게 하면 안돼요!</Label>
      </S.Wrapper>
      <S.Wrapper>
        <Label>꼭 알아주세요!</Label>
      </S.Wrapper>
    </S.Container>
  );
};
