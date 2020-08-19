import React from 'react';
import { connect } from 'react-redux';
import { restartGame } from '../../actions/index';

export function UnconnectedRestartButton({ success, restartGame }) {

  const handleClick = () => {
    restartGame()
  }

  let content = success ? 
    <div className="restart-game" data-test='container'>
      <button 
        className='btn btn-primary mb-2' 
        data-test='restart-button'
        onClick={() => handleClick()}
      >
        Restart
      </button>
    </div> : null

  return content; 
}

const mapStateToProps = ({ success }) => {
  return { success }
}

export default connect(mapStateToProps, { restartGame })(UnconnectedRestartButton);
