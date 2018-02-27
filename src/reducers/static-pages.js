import { actionTypes } from '../actions/staticPageActions'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PAGE_SUCCESS:
      return { ...state, [action.page.id]: action.page }
    default:
      return state
  }
}

export default reducer
