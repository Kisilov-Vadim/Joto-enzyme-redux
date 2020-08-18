import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSecretWord } from './actions/index';
import './App.scss';
import Congrats from './components/Congrats/Congrats';
import GuessedWords from './components/GuessedWords/GuessedWords';
import Input from './components/Input/Input';

export class UnconnectedApp extends React.Component {

  componentDidMount() {
    //get the secret word
    this.props.getSecretWord();
  }

  render() {
    const {success, guessedWords} = this.props;

    return (
      <div className="App container">
        <h1>Joto</h1>
        <Congrats success={success} />
        <Input success={success} />
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
