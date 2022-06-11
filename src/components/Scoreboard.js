import React from 'react';
import HighScore from './HighScore';
import CurrentScore from './CurrentScore';

function Scoreboard() {
  return (
    <div>
      <HighScore />
      <CurrentScore />
    </div>
  );
}

export default Scoreboard;
