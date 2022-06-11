import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Scoreboard />
        <Gameboard />
        <Footer />
      </div>
    );
  }
}

export default App;
