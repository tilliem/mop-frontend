import { actionTypes } from '../actions/serverErrorActions'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SERVER_ERROR:
      return action.error
    default:
      return state
  }
}

export default reducer
