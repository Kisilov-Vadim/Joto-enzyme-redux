import React from 'react';
import { connect } from 'react-redux';

import { guessWord } from '../../actions/index';

function Input({ success }) {
  let content = success ? null : 
    <div data-test='component-input'>
      <form className='form-inline'>
        <input 
          data-test='input-box'
          className='mb-2 mx-sm-3'
          type='text'
          placeholder='enter guess'
        />
        <button
          data-test='submit-button'
          type='submit'
          className='btn btn-primary mb-2'
        >
          Submit
        </button>
      </form>
    </div>

  return content
}

const mapStateToProps = ({ success }) => {
  return { success }
}

export default connect(mapStateToProps, { guessWord })(Input);
