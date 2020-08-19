import React from 'react';
import { connect } from 'react-redux';
import { getSecretWord } from './actions/index';
import './App.scss';
import Congrats from './components/Congrats/Congrats';
import GuessedWords from './components/GuessedWords/GuessedWords';
import Input from './components/Input/Input';
import RestartButton from './components/RestartButton/RestartButton';

export class UnconnectedApp extends React.Component {

  componentDidMount() {
    //get the secret word
    this.props.getSecretWord();
  }

  render() {
    const {success, secretWord, guessedWords} = this.props;

    return (
      <div className="App container">
        <h1>Joto</h1>
        <div>The secret word is { secretWord } </div>
        <Congrats success={success} />
        <Input success={success} />
        <RestartButton />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state; 
  return { success, guessedWords, secretWord };
}; 

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
