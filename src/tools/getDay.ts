export const days = ['일', '월', '화', '수', '목', '금', '토'];

export const MILLISECOND = 1000;
export const SECOND = 60;
export const MINUTE = 60;
export const HOUR = 24;

export const DAYS_MILLISECOND = MILLISECOND * SECOND * MINUTE * HOUR;
export const HOURS_MILLISECOND = MILLISECOND * SECOND * MINUTE;
export const MINUTES_MILLISECOND = MILLISECOND * SECOND;

export const dayFormatter = (input: string) => {
  const dayToIndex = new Date(input).getDay();
  const date = new Date(input).getDate();
  const months = new Date(input).getMonth() + 1;

  return `${`${months >= 10 ? months : `0${months}`}.${
    date >= 10 ? date : `0${date}`
  } (${days[dayToIndex]})`}`;
};
