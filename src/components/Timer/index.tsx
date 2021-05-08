import React from 'react';

export interface ITimeProps {
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export const Timer: React.FC<ITimeProps> = ({ day, hour, minute, second }) => {
  const hourToString = hour > 10 ? `${hour}` : `0${hour}`;
  const minuteToString = minute > 10 ? `${minute}` : `0${minute}`;
  const secondToString = second > 10 ? `${second}` : `0${second}`;
  return (
    <div>{`시작까지 ${day}일 ${hourToString}:${minuteToString}:${secondToString} 남았습니다.`}</div>
  );
};
