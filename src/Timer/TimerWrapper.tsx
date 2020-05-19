import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './TimerWrapper.scss';
import Hours from '../components/Hours/Hours';
import Minutes from '../components/Minutes/Minutes';
import Seconds from '../components/Seconds/Seconds';
import Days from '../components/Days/Days';

interface IProps {
  timerText: string;
}

const TimerWrapper = (props: IProps) => {
  const [days, setDays] = useState<number>(0);
  const [hour, setHours] = useState<number>(0);
  const [minute, setMinutes] = useState<number>(0);
  const [second, setSeconds] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      fromNowToThen();
    }, 1000);
  }, []);

  const fromNowToThen = () => {
    const now = moment();
    const then = moment('12/15/2020 12:00:00');

    const diff = moment(then).diff(now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setSeconds(seconds);
    setMinutes(minutes);
    setHours(hours);
    setDays(days);
  };

  const fromThenToThen = (startDate?: string) => {
    const now = moment();
    const start = moment(startDate);

    const diff = moment(start).diff(now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  };

  return (
    <div className="timer-wrapper">
      <Days days={days} />
      <div className="timer-divider">:</div>
      <Hours hours={hour} />
      <div className="timer-divider">:</div>
      <Minutes minutes={minute} />
      <div className="timer-divider">:</div>
      <Seconds seconds={second} />
      <div className="timer-text">{props.timerText}</div>
    </div>
  );
};

export default TimerWrapper;
