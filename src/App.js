import React from 'react';
import CountdownTimer from './CountdownTimer';

import './App.css';

export default function App() {
  const THREE_DAYS_IN_MS = 1 * 1 * 1 * 10 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  );
}
