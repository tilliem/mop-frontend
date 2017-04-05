import {combineReducers} from 'redux';

import {actionTypes as petitionActionTypes} from '../actions/petitionActions.js';


// function fetchPetitionRequest(petitionSlug) {
//     return {
//         type: FETCH_PETTION_REQUEST,
//         petitionSlug
//     }
// }

var initialState = {petitions: {}}

function petitionReducer (state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case petitionActionTypes.FETCH_PETITION_REQUEST:
            console.log('in petitionReducer');
            break;
        case petitionActionTypes.FETCH_PETITION_SUCCESS:
            return {
              'petitions': Object.assign({},{[action.slug]: action.petition})
            };
        case petitionActionTypes.FETCH_PETITION_FAILURE:
            // udpate state with status?
            break;
    }
    return state
}

const rootReducer = combineReducers({
    petitionStore: petitionReducer
});

export default rootReducer;
