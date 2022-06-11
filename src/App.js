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
    };

    this.chooseRandomCards = this.chooseRandomCards.bind(this);
  }

  chooseRandomCards() {
    const allCards = [...buildCards];
    const randomChoices = [];
    for (let i = 0; i < 10; i++) {
      randomChoices.push(
        ...allCards.splice(Math.floor(Math.random() * allCards.length), 1)
      );
    }
    console.log('original', buildCards);
    console.log('copied', allCards);
    this.setState(
      {
        randomChoices,
      },
      () => {
        console.log(this.state.randomChoices);
      }
    );
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Scoreboard />
        <Gameboard />
        <Footer />
        <button onClick={this.chooseRandomCards}>Log some cards</button>
      </div>
    );
  }
}

export default App;
