import moment from 'moment';

export const hours = () => {
  const date = moment();
  const hour = date.hour();
  return hour;
};

export const minutes = () => {
  const date = moment();
  const minute = date.minute();
  return minute;
};

export const seconds = () => {
  const date = moment();
  const second = date.second();
  return second;
};
