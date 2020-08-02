import React from 'react';
import './App.scss';

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

export default App;
