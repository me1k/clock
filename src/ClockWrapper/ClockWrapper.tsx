import React, { useEffect, useState } from 'react';

import './ClockWrapper.scss';
import ClockHours from '../ClockHours/ClockHours';
import ClockMinutes from '../ClockMinutes/ClockMinutes';
import ClockSeconds from '../ClockSeconds/ClockSeconds';
import { hours, minutes, seconds } from '../utils/helpers';

interface IProps {}

const ClockWrapper = (props: IProps) => {
  const [hour, setHours] = useState<number>(0);
  const [minute, setMinutes] = useState<number>(0);
  const [second, setSeconds] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
  });

  return (
    <div className="clock-wrapper">
      <ClockHours hours={hour} />
      <div className="clock-divider">:</div>
      <ClockMinutes minutes={minute} />
      <div className="clock-divider">:</div>
      <ClockSeconds seconds={second} />
      <div className="clock-text">Uhr</div>
    </div>
  );
};

export default ClockWrapper;
