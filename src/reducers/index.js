import { combineReducers } from 'redux'
import { actionTypes as petitionActionTypes } from '../actions/petitionActions.js'

// function fetchPetitionRequest(petitionSlug) {
//     return {
//         type: FETCH_PETTION_REQUEST,
//         petitionSlug
//     }
// }

const initialPetitionState = {
  petitions: {}, // keyed by slug AND petition_id for petition route
  petitionSignatures: {}, // keyed by petition slug, then page
  signatureStatus: {} // keyed by petition_id (because form doesn't have slug)
}

function petitionReducer(state = initialPetitionState, action) {
  const { type, petition: petitionWithoutSlug, slug, page, signatures } = action
  let petition = {}
  if (typeof petitionWithoutSlug === 'object') {
    petition = Object.assign(petitionWithoutSlug, { slug })
  } else if (slug && typeof state.petitions[slug] !== 'undefined') {
    petition = state.petitions[slug]
  }
  switch (type) {
    case petitionActionTypes.FETCH_PETITION_SUCCESS:
      return Object.assign({}, state, {
        petitions: Object.assign(
          {}, state.petitions, {
            // key it both by id and by slug, for different lookup needs
            [slug]: petition,
            [petition.petition_id]: petition
          }
        )
      })
    case petitionActionTypes.PETITION_SIGNATURE_SUCCESS:
      return Object.assign({}, state, {
        signatureStatus: Object.assign(
          {}, state.signatureStatus, { [petition.petition_id]: 'success' })
      })
    case petitionActionTypes.FETCH_PETITION_SIGNATURES_SUCCESS:
      petition.signatureCount = signatures.count
      // TODO: get signatureGoal from API
      petition.signatureGoal = 1000000
      return Object.assign({}, state, {
        petitionSignatures: Object.assign(
          {}, state.petitionSignatures, {
            [slug]: Object.assign(
              {}, state.petitionSignatures[slug],
              {
                // eslint-disable-next-line no-underscore-dangle
                [page]: signatures._embedded.map((signature) =>
                  // eslint-disable-next-line no-underscore-dangle
                  Object.assign(signature, { user: signature._embedded.user })
                )
              }
            )
          }
        ),
        petitions: Object.assign(
          {}, state.petitions, {
            [slug]: petition,
            [petition.petition_id]: petition
          }
        )
      })
    default:
      return state
  }
}

function userReducer(state = {}, action) {
  switch (action.type) {
    case petitionActionTypes.PETITION_SIGNATURE_SUBMIT:
      console.log('userReducer on submit', action)
      return state
      break;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  petitionStore: petitionReducer,
  userData: userReducer
})

export default rootReducer
