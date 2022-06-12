import React from 'react';
import styles from '../styles/Scoreboard.module.css';
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
