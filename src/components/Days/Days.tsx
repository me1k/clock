import React from 'react';
import './Days.scss';

interface IProps {
  days: number;
}

const Days = (props: IProps) => {
  return (
    <div className="timer-days-wrapper">
      <div className="timer-days">{props.days}</div>
    </div>
  );
};

export default Days;
