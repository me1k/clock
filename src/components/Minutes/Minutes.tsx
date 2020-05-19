import React from 'react';
import './Minutes.scss';

interface IProps {
  minutes: number;
}

const ClockMinutes = (props: IProps) => {
  return (
    <div className="clock-minutes-wrapper">
      <div className="clock-minutes">
        {props.minutes < 10 ? '0' + props.minutes : props.minutes}
      </div>
    </div>
  );
};

export default ClockMinutes;
