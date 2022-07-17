import dayjs from 'dayjs';

type GetArticleTime = (time: Date) => string;

export const getArticleTime: GetArticleTime = time => {
  const dayjsTime = dayjs(time);
  return dayjsTime.isSame(dayjs(), 'day') ? dayjsTime.format('HH:mm') : dayjsTime.format('MM/DD');
};
