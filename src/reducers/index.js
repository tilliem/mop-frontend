import { combineReducers } from 'redux'
import { actionTypes as petitionActionTypes } from '../actions/petitionActions.js'

// function fetchPetitionRequest(petitionSlug) {
//     return {
//         type: FETCH_PETTION_REQUEST,
//         petitionSlug
//     }
// }

const initialState = {
  petitions: {}, // keyed by slug AND petition_id for petition route
  petitionSignatures: {}, // keyed by petition slug, then page
  signatureStatus: {} // keyed by petition_id (because form doesn't have slug)
}

function petitionReducer(state = initialState, action) {
  const { type, petition: petitionWithoutSlug, slug, page, signatures } = action
  let petition = {}
  if (typeof petitionWithoutSlug === 'object') {
    petition = Object.assign(petitionWithoutSlug, { slug })
  }
  switch (type) {
    case petitionActionTypes.FETCH_PETITION_SUCCESS:
      return Object.assign({}, state, {
        petitions: Object.assign(
          {}, state.petitions, {
            // key it both by id and by slug, for different lookup needs
            [slug]: petition,
            [petition.petition_id]: petition
          })
      })
    case petitionActionTypes.PETITION_SIGNATURE_SUCCESS:
      return Object.assign({}, state, {
        signatureStatus: Object.assign(
          {}, state.signatureStatus, { [petition.petition_id]: 'success' })
      })
    case petitionActionTypes.FETCH_PETITION_SIGNATURES_SUCCESS:
      return Object.assign({}, state, {
        petitionSignatures: Object.assign(
          {}, state.petitionSignatures, {
            [slug]: Object.assign(
              {},
              state.petitionSignatures[slug],
              // eslint-disable-next-line no-underscore-dangle
              { [page]: signatures._embedded }
            )
          }
        )
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  petitionStore: petitionReducer
})

export default rootReducer
