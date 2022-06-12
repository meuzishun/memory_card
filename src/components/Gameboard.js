import React from 'react';
import styles from '../styles/Gameboard.module.css';
import Card from './Card';
import uniqid from 'uniqid';

function Gameboard(props) {
  return (
    <div>
      {props.choices.map((choice) => (
        <Card
          key={uniqid()}
          rank={choice.rank}
          suit={choice.suit}
          cb={props.cb}
        />
      ))}
    </div>
  );
}

export default Gameboard;
