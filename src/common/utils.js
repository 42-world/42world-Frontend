import dayjs from 'dayjs';

export const isEmpty = value => {
  return (
    value == null ||
    value.length === 0 ||
    value == undefined ||
    (value != null && typeof value == 'object' && !Object.keys(value).length)
  );
};

export const getArticleTime = time =>
  dayjs(time).isSame(dayjs(), 'day') ? dayjs(time).format('HH:mm') : dayjs(time).format('MM/DD');

export const isNewArticle = time => dayjs().isBefore(dayjs(time).add(12, 'hour'));
