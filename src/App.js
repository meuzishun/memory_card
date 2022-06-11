import React, { Component } from 'react';
import './App.css';
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
    };

    this.chooseRandomCards = this.chooseRandomCards.bind(this);
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
    } else {
      this.setState(
        {
          previouslyChosen: [],
        },
        () => {
          console.log(this.state.previouslyChosen);
        }
      );
    }
  }

  render() {
    return (
      <div className='App'>
        <Header onClick />
        <Scoreboard score={this.state.previouslyChosen.length} />
        <Gameboard
          choices={this.state.randomChoices}
          cb={this.handleCardClick}
        />
        <Footer />
        <button onClick={this.chooseRandomCards}>Log some cards</button>
      </div>
    );
  }
}

export default App;
