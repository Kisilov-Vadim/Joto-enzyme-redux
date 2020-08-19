import { actionTypes } from '../actions/index';

export default (state=[], action) => {
  switch(action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload]
    case actionTypes.CLEAR_GUESS_WORDS:
      return []
    default: 
      return state 
  }
}