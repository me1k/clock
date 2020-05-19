import React, { useEffect, useState } from 'react';

import './ClockWrapper.scss';
import Hours from '../../components/Hours/Hours';
import Minutes from '../../components/Minutes/Minutes';
import Seconds from '../../components/Seconds/Seconds';
import { clockHours, clockMinutes, clockSeconds } from '../../utils/helpers';

interface IProps {
  clockText: string;
}

const ClockWrapper = (props: IProps) => {
  const [hour, setHours] = useState<number>(0);
  const [minute, setMinutes] = useState<number>(0);
  const [second, setSeconds] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setHours(clockHours);
      setMinutes(clockMinutes);
      setSeconds(clockSeconds);
    }, 1000);
  });

  return (
    <div className="clock-wrapper">
      <Hours hours={hour} />
      <div className="clock-divider">:</div>
      <Minutes minutes={minute} />
      <div className="clock-divider">:</div>
      <Seconds seconds={second} />
      <div className="clock-text">{props.clockText}</div>
    </div>
  );
};

export default ClockWrapper;
