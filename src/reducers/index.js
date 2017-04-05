import {combineReducers} from 'redux';

// make some actions

const actions = {
  'FETCH_PETTION_REQUEST': 'FETCH_PETTION_REQUEST',
  'FETCH_PETTION_SUCCESS': 'FETCH_PETTION_SUCCESS',
  'FETCH_PETTION_FAILURE': 'FETCH_PETTION_FAILURE'
};

// function fetchPetitionRequest(petitionSlug) {
//     return {
//         type: FETCH_PETTION_REQUEST,
//         petitionSlug
//     }
// }

var initialState = {petitions: {}}

function petitionReducer (state = initialState, action) {

    switch (action.type) {
        case actions.FETCH_PETITION_REQUEST:
            // call API
            //console.log(action, "FETCH_PETITION_REQUEST");
            break
        case actions.FETCH_PETITION_SUCCESS:
            // update state with petition data
        case actions.FETCH_PETITION_FAILURE:
            // udpate state with status?
    }
    return state
}

const rootReducer = combineReducers({
    petition: petitionReducer
});

export default rootReducer;
