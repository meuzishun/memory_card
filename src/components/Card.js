import React from 'react';
import styles from '../styles/Card.module.css';

function Card(props) {
  const iconLookup = {
    hearts: 'cards-heart',
    clubs: 'cards-club',
    spades: 'cards-spade',
    diamonds: 'cards-diamond',
  };
  return (
    <div
      onClick={props.cb}
      data-rank={props.rank}
      data-suit={props.suit}
      className={styles.card}
    >
      <div className={styles.top}>
        <p>{props.rank}</p>
        <span
          className='iconify'
          data-icon={`mdi-${iconLookup[props.suit]}`}
        ></span>
      </div>
      <div className={styles.center}>
        <span
          className='iconify'
          data-icon={`mdi-${iconLookup[props.suit]}`}
        ></span>
      </div>
      <div className={styles.bottom}>
        <p>{props.rank}</p>
        <span
          className='iconify'
          data-icon={`mdi-${iconLookup[props.suit]}`}
        ></span>
      </div>
    </div>
  );
}

export default Card;
