import React, { Component } from 'react';
import styles from './styles/App.module.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';
import buildCards from './utilities/buildCards';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomChoices: [],
      previouslyChosen: [],
      highScore: 0,
    };

    this.chooseRandomCards = this.chooseRandomCards.bind(this);
    this.emptyChosenCards = this.emptyChosenCards.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  chooseRandomCards() {
    const allCards = [...buildCards];
    const randomChoices = [];
    for (let i = 0; i < 10; i++) {
      randomChoices.push(
        ...allCards.splice(Math.floor(Math.random() * allCards.length), 1)
      );
    }
    // console.log('original', buildCards);
    // console.log('copied', allCards);
    this.setState(
      {
        randomChoices,
      }
      // () => {
      //   console.log(this.state.randomChoices);
      // }
    );
  }

  emptyChosenCards() {
    this.setState({
      randomChoices: [],
    });
  }

  handleCardClick(e) {
    const card = e.currentTarget;
    const { rank, suit } = card.dataset;
    const alreadyChosen = this.state.previouslyChosen.some((choice) => {
      return choice.rank === rank && choice.suit === suit;
    });
    console.log(alreadyChosen);
    if (!alreadyChosen) {
      this.setState(
        {
          previouslyChosen: [...this.state.previouslyChosen, { rank, suit }],
        },
        () => {
          console.log(this.state.previouslyChosen);
        }
      );
      this.chooseRandomCards();
    } else {
      this.setState(
        {
          previouslyChosen: [],
          highScore: this.state.previouslyChosen.length,
        },
        () => {
          console.log(this.state.previouslyChosen);
        }
      );
      this.emptyChosenCards();
    }
  }

  render() {
    return (
      <div className={styles.App}>
        <Header startGame={this.chooseRandomCards} />
        <Scoreboard
          score={this.state.previouslyChosen.length}
          high={this.state.highScore}
        />
        <Gameboard
          choices={this.state.randomChoices}
          cb={this.handleCardClick}
        />
        <Footer />
        {/* <button onClick={this.chooseRandomCards}>Log some cards</button> */}
      </div>
    );
  }
}

export default App;
