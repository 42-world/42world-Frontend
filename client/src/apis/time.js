export const timeLeft = (date) => {
  const current = new Date().getTime();
  const numericTime = new Date(date).getTime();
  const gap = current - numericTime;
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  if (gap < minute) {
    return "방금";
  }
  if (gap < hour) {
    return `${parseInt(gap / minute)} 분`;
  }
  if (gap < day) {
    return `${parseInt(gap / hour)} 시간`;
  }
  return `${parseInt(gap / day)} 일`;
};
