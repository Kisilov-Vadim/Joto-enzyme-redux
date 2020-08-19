import { getLetterMatchCount } from '../helpers/index';
import axios from 'axios';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  CLEAR_GUESS_WORDS: 'CLEAR_GUESS_WORDS',
  SET_SECRET_WORD: 'SET_SECRET_WORD'
}

export const guessWord = (guessedWord) => {
  
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    }); 
  
    if (guessedWord === secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS,
        payload: true
      })
    }
  }
}

export const getSecretWord = () => {
  return (dispatch) => {
    return axios.get('https://api.datamuse.com/words?ml=ringing+in+the+ears')
      .then(({data}) => {
        let randomNum = Math.floor(Math.random() * (data.length - 0)) + 0; 
        console.log(data[randomNum].word)
        dispatch({
          type: actionTypes.SET_SECRET_WORD,
          payload: data[randomNum].word
        })
      });
  }
}

export const restartGame = () => {
  return (dispatch) => {
    dispatch(getSecretWord());

    dispatch({
      type: actionTypes.CLEAR_GUESS_WORDS
    });

    dispatch({
      type: actionTypes.CORRECT_GUESS,
      payload: false
    });
  }
}