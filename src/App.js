// import React, { Component } from 'react';
import React, { useState } from 'react';
import styles from './styles/App.module.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';
import buildCards from './utilities/buildCards';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       randomChoices: [],
//       previouslyChosen: [],
//       highScore: 0,
//     };

//     this.chooseRandomCards = this.chooseRandomCards.bind(this);
//     this.emptyChosenCards = this.emptyChosenCards.bind(this);
//     this.handleCardClick = this.handleCardClick.bind(this);
//   }

//   chooseRandomCards() {
//     const allCards = [...buildCards];
//     const randomChoices = [];

//     for (let i = 0; i < 10; i++) {
//       randomChoices.push(
//         ...allCards.splice(Math.floor(Math.random() * allCards.length), 1)
//       );
//     }

//     this.setState({
//       randomChoices,
//     });
//   }

//   emptyChosenCards() {
//     this.setState({
//       randomChoices: [],
//     });
//   }

//   handleCardClick(e) {
//     const card = e.currentTarget;
//     const { rank, suit } = card.dataset;
//     const alreadyChosen = this.state.previouslyChosen.some((choice) => {
//       return choice.rank === rank && choice.suit === suit;
//     });

//     if (!alreadyChosen) {
//       this.setState({
//         previouslyChosen: [...this.state.previouslyChosen, { rank, suit }],
//       });
//       this.chooseRandomCards();
//     } else {
//       this.setState({
//         previouslyChosen: [],
//         highScore:
//           this.state.previouslyChosen.length > this.state.highScore
//             ? this.state.previouslyChosen.length
//             : this.state.highScore,
//       });
//       this.emptyChosenCards();
//     }
//   }

//   render() {
//     return (
//       <div className={styles.App}>
//         <Header startGame={this.chooseRandomCards} />
//         <Scoreboard
//           score={this.state.previouslyChosen.length}
//           high={this.state.highScore}
//         />
//         <Gameboard
//           choices={this.state.randomChoices}
//           cb={this.handleCardClick}
//         />
//         <Footer />
//       </div>
//     );
//   }
// }

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
