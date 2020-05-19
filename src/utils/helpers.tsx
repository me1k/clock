import moment from 'moment';

export const clockHours = () => {
  const date = moment();
  const hour = date.hour();
  return hour;
};

export const clockMinutes = () => {
  const date = moment();
  const minute = date.minute();
  return minute;
};

export const clockSeconds = () => {
  const date = moment();
  const second = date.second();
  return second;
};
