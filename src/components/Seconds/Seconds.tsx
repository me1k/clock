import React from 'react';
import './Seconds.scss';

interface IProps {
  seconds: number;
}

const ClockSeconds = (props: IProps) => {
  return (
    <div className="clock-seconds-wrapper">
      <div className="clock-seconds">
        {props.seconds < 10 ? '0' + props.seconds : props.seconds}
      </div>
    </div>
  );
};

export default ClockSeconds;
