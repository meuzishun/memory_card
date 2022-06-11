import React from 'react';
import HighScore from './HighScore';
import CurrentScore from './CurrentScore';

function Scoreboard(props) {
  return (
    <div>
      <HighScore />
      <CurrentScore score={props.score} />
    </div>
  );
}

export default Scoreboard;
