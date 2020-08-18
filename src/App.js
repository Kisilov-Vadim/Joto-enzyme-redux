import React from 'react';
import './App.scss';
import { connect } from 'react-redux'; 
import { getSecretWord } from './actions/index';

import GuessedWords from './components/GuessedWords/GuessedWords';
import Congrats from './components/Congrats/Congrats';

function App() {

  return (
    <div className="App container">
      <h1>Joto</h1>
      <Congrats success={false} />
      <GuessedWords guessedWords={[{guessedWord: 'train', letterMatchCount: 3}]} />
    </div>
  );
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state; 
  return { success, guessedWords, secretWord };
}; 

export default connect(mapStateToProps, { getSecretWord })(App);
