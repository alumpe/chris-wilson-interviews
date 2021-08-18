export const timeStringFromSeconds = (timestamp: number) => {
  const leadingZero = (num: number) => `0${num}`.slice(-2);

  const formatTime = (hours: number, minutes: number, seconds: number) =>
    [hours, minutes, seconds].map(leadingZero).join(":");

  const hours = Math.floor(timestamp / 3600);
  timestamp = timestamp - hours * 3600;

  const minutes = Math.floor(timestamp / 60);
  const seconds = timestamp - minutes * 60;

  return formatTime(hours, minutes, seconds);
};
