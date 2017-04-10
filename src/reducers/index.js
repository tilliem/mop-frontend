import {combineReducers} from 'redux';
import {actionTypes as petitionActionTypes} from '../actions/petitionActions.js';

// function fetchPetitionRequest(petitionSlug) {
//     return {
//         type: FETCH_PETTION_REQUEST,
//         petitionSlug
//     }
// }

var initialState = {petitions: {}, signatureStatus:{}};

function petitionReducer (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case petitionActionTypes.FETCH_PETITION_REQUEST:
      console.log('in petitionReducer');
      break;
    case petitionActionTypes.FETCH_PETITION_SUCCESS:
      return Object.assign({}, state, {
        'petitions': Object.assign(
          {}, state.petitions, {[action.slug]: action.petition})
      });
    case petitionActionTypes.FETCH_PETITION_FAILURE:
      // udpate state with status?
      break;
    case petitionActionTypes.PETITION_SIGNATURE_SUBMIT:
      // udpate state with status?
      break;
    case petitionActionTypes.PETITION_SIGNATURE_SUCCESS:
      return Object.assign({}, state, {
        'signatureStatus': Object.assign(
          {}, state.signatureStatus, {[action.petition.petition_id]: 'success'})
      });
      // udpate state with status?
      break;
    case petitionActionTypes.PETITION_SIGNATURE_FAILURE:
      // udpate state with status?
      break;
  }
  return state;
}

const rootReducer = combineReducers({
  petitionStore: petitionReducer
});

export default rootReducer;
