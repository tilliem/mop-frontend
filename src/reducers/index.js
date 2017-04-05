import {combineReducers} from 'redux';

// make some actions

const FETCH_PETTION_REQUEST = 0
const FETCH_PETITION_SUCCESS = 1
const FETCH_PETITION_FAILURE = 2

// function fetchPetitionRequest(petitionSlug) {
//     return {
//         type: FETCH_PETTION_REQUEST,
//         petitionSlug
//     }
// }

var initialState = {petitions: {}}

function petitionReducer (state = initialState, action) {

    switch (action) {
        case FETCH_PETITION_REQUEST:
            // call API
            console.log(action, "FETCH_PETITION_REQUEST");
            break
        case FETCH_PETITION_SUCCESS:
            // update state with petition data
        case FETCH_PETITION_FAILURE:
            // udpate state with status?
    }
    return state
}

const rootReducer = combineReducers({
    petitionReducer
});

export default rootReducer;