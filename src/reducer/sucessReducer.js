import { actionTypes } from "../actions"

export default (state=false, action) => {
  switch(action.type) {
    case (actionTypes.CORRECT_GUESS):
      return action.payload
    default:
      return state
  }
}