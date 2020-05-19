import React, { useEffect, useState } from 'react';

import './TimerWrapper.scss';
import Hours from '../components/Hours/Hours';
import Minutes from '../components/Minutes/Minutes';
import Seconds from '../components/Seconds/Seconds';

interface IProps {
  timerText: string;
}

const TimerWrapper = (props: IProps) => {
  const [hour, setHours] = useState<number>(0);
  const [minute, setMinutes] = useState<number>(0);
  const [second, setSeconds] = useState<number>(0);

  useEffect(() => {});

  return (
    <div className="timer-wrapper">
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
