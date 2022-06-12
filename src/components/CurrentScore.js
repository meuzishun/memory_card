import React from 'react';
import styles from '../styles/CurrentScore.module.css';

function CurrentScore(props) {
  return <div className={styles.current}>Current Score: {props.score}</div>;
}

export default CurrentScore;
