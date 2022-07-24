import dayjs from 'dayjs';

type GetCreatedAt = (time: Date) => string;

export const getCreatedAt: GetCreatedAt = time => {
  const dayjsTime = dayjs(time);
  return dayjsTime.isSame(dayjs(), 'day') ? dayjsTime.format('HH:mm') : dayjsTime.format('MM/DD');
};
