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

export const isNewArticle = time => dayjs().isBefore(dayjs(time).add(48, 'hour'));

export const numberRange = (start, end) => {
  return new Array(end + 1 - start).fill().map((d, i) => i + start);
};

export const serializeFormQuery = searchParams => {
  const result = {};

  for (let [key, value] of searchParams.entries()) {
    result[key] = value;
  }
  return result;
};
