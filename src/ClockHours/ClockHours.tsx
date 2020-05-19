import React from 'react';
import './ClockHours.scss';

interface IProps {
  hours: number;
}

const ClockHours = (props: IProps) => {
  return (
    <div className="clock-hours-wrapper">
      <div className="clock-hours">
        {props.hours < 10 ? '0' + props.hours : props.hours}
      </div>
    </div>
  );
};

export default ClockHours;
