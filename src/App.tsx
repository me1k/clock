import React from 'react';
import './App.scss';
import ClockWrapper from './Clock/ClockWrapper/ClockWrapper';
import TimerWrapper from './Timer/TimerWrapper';

function App() {
  return (
    <div className="App">
      <ClockWrapper clockText={'Uhr'} />
      <TimerWrapper timerText={'verbleibend'} />
    </div>
  );
}

export default App;
