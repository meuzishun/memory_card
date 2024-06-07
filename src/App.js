import React, { useState } from 'react';
import styles from './styles/App.module.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';
import buildCards from './utilities/buildCards';

function App() {
  const [randomChoices, setRandomChoices] = useState([]);
  const [previouslyChosen, setPreviouslyChosen] = useState([]);
  const [highScore, setHighScore] = useState(0);

  function chooseRandomCards() {
    const allCards = [...buildCards];
    const randomCards = [];

    for (let i = 0; i < 10; i++) {
      randomCards.push(
        ...allCards.splice(Math.floor(Math.random() * allCards.length), 1)
      );
    }

    setRandomChoices(randomCards);
  }

  function emptyChosenCards() {
    setRandomChoices([]);
  }

  function handleCardClick(e) {
    const card = e.currentTarget;
    const { rank, suit } = card.dataset;
    const alreadyChosen = previouslyChosen.some((choice) => {
      return choice.rank === rank && choice.suit === suit;
    });

    if (!alreadyChosen) {
      setPreviouslyChosen([...previouslyChosen, { rank, suit }]);
      chooseRandomCards();
    } else {
      setPreviouslyChosen([]);
      setHighScore(
        previouslyChosen.length > highScore
          ? previouslyChosen.length
          : highScore
      );
      emptyChosenCards();
    }
  }

  return (
    <div className={styles.App}>
      <Header startGame={chooseRandomCards} />
      <Scoreboard score={previouslyChosen.length} high={highScore} />
      <Gameboard choices={randomChoices} cb={handleCardClick} />
      <Footer />
    </div>
  );
}

export default App;
