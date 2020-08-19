import React from 'react';
import { connect } from 'react-redux';

import { guessWord } from '../../actions/index';

export class UnconnectedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: null
    }

    this.submitGessWord = this.submitGessWord.bind(this); 
  }

  submitGessWord(e) {
    e.preventDefault(); 
    const guessedWord = this.state.currentGuess;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: '' });
    }
  }

  render() {
    const { success } = this.props;

    let content = success ? null : 
    <div data-test='component-input'>
      <form className='form-inline'>
        <input 
          data-test='input-box'
          className='mb-2 mx-sm-3'
          type='text'
          placeholder='enter guess'
          value={this.state.currentGuess}
          onChange={(e) => this.setState({ currentGuess: e.target.value })}
        />
        <button
          data-test='submit-button'
          type='submit'
          className='btn btn-primary mb-2'
          onClick={(e) => this.submitGessWord(e)}
        >
          Submit
        </button>
      </form>
    </div>

    return content;
  }
}

const mapStateToProps = ({ success }) => {
  return { success }
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
