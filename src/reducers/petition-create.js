import { actionTypes } from '../actions/createPetitionActions'

const initialStateForDevDeletThis = {
  title: 'Delet this',
  target: [{
    label: 'The entire U.S Senate'
  }],
  summary: 'This is the summary',
  description: 'This is the description'
}

const reducer = (state = initialStateForDevDeletThis, action) => {
  switch (action.type) {
    case actionTypes.CREATE_PETITION_PREVIEW_SUBMIT:
      // You have to submit all values in the action together
      return {
        ...state,
        title: action.title,
        summary: action.summary,
        description: action.description,
        target: action.target
      }
    default:
      return state
  }
}

export default reducer
