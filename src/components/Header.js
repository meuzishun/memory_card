import React from 'react';
import styles from '../styles/Header.module.css';

function Header(props) {
  return (
    <div className={styles.header}>
      <h1>Memory Card Game</h1>
      <p>
        Try to click on as many cards as you can <em>without </em>
        repeating any...
      </p>
      <button onClick={props.startGame}>Start Game</button>
    </div>
  );
}

export default Header;
