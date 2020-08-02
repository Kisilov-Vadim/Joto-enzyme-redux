import React from 'react';
import PropTypes from 'prop-types';

function GuessedWords(props) {
  let content; 

  if (props.guessedWords.length === 0) {
    content = (
      <span data-test="guessed-instructions">
        Try to guess the secret word!
      </span>
    )
  } else {
    const guessedWordRow = props.guessedWords.map((word, i) => (
      <tr key={i} data-test="guessed-word">
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ))
    content = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table tavle-sm">
          <thead className="thead-light">
            <tr><th>Guess</th><th>Matching Letters</th></tr>
          </thead>
          <tbody>
            {guessedWordRow}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div data-test="component-guessed-words">
      {content}
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string,
      letterMatchCount: PropTypes.number
    })
  ).isRequired
}

export default GuessedWords;
