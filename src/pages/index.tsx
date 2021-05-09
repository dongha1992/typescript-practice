import React, { Fragment, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Intro } from '@components/Intro';
import { ChallengeMethod } from '@components/ChallengeMethod';
import { MiracleMorningInformation } from '@components/MiracleMorningInformation';
import { AuthenticationMethod } from '@components/AuthenticationMethod';
import { Review } from '@components/Review';
import { Tab } from '@components/Tab';
import Network from '@utils/Network';
import { InView } from 'react-intersection-observer';
import { useInterval } from '@hooks/useInterval';
import {
  MILLISECOND,
  DAYS_MILLISECOND,
  HOURS_MILLISECOND,
  MINUTES_MILLISECOND,
} from '@tools/getDay';

const Home = ({ data }) => {
  const [day, setDay] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const { challenge } = data.data;

  const getTimer = useCallback(() => {
    const currentDay = new Date();
    const targetDay = new Date(challenge.startDate);
    const remaningTime = targetDay.getTime() - currentDay.getTime();

    const _days = Math.floor(remaningTime / DAYS_MILLISECOND);
    const _hours = Math.floor(
      (remaningTime % DAYS_MILLISECOND) / HOURS_MILLISECOND
    );
    const _minutes = Math.floor(
      (remaningTime % HOURS_MILLISECOND) / MINUTES_MILLISECOND
    );
    const _seconds = Math.floor(
      (remaningTime % MINUTES_MILLISECOND) / MILLISECOND
    );

    setDay(_days);
    setHour(_hours);
    setMinute(_minutes);
    setSecond(_seconds);

    if (remaningTime < 0) {
      return;
    }
  }, [second]);

  useInterval(getTimer, 1000);

  return (
    <>
      <Intro
        imageUrl="/images/intro.png"
        timeData={{ day, hour, minute, second }}
      />
      <MainContent>
        <Tab
          reviewCount={
            challenge.reviews.comments.length >= 100
              ? '100+'
              : `${challenge.reviews.comments.length}`
          }
        />
        <InView>
          <ChallengeMethod />
        </InView>
        <InView>
          <MiracleMorningInformation />
          <AuthenticationMethod />
        </InView>
        <InView>
          <Review />
        </InView>
      </MainContent>
    </>
  );
};
export default Home;

export const getStaticProps = async () => {
  const MIRACLE_MORNING_CHALLENGE_ID = '104090';
  const data = await Network.getChallengeInformation(
    MIRACLE_MORNING_CHALLENGE_ID
  );

  return {
    props: { data },
  };
};

const MainContent = styled.div``;
const Section = styled.div``;
