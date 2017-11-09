import { combineReducers } from 'redux'
import { actionTypes as petitionActionTypes } from '../actions/petitionActions.js'
import { actionTypes as sessionActionTypes } from '../actions/sessionActions.js'

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
    case sessionActionTypes.ANONYMOUS_SESSION_START:
    case sessionActionTypes.USER_SESSION_START:
    case sessionActionTypes.USER_SESSION_FAILURE:
    case sessionActionTypes.TOKEN_SESSION_START:
    case sessionActionTypes.TOKEN_SESSION_FAILURE:
      // TODO
      break;
    case petitionActionTypes.PETITION_SIGNATURE_SUBMIT:
      // if it's an anonymous user or we get useful session information
      // then copy it into userData
      if (!state.full_name
          && action.signature && action.signature.person) {
        const newData = {}
        if (action.signature.person.full_name) {
          newData.full_name = action.signature.person.full_name
        }
        if (action.signature.person.email_addresses
            && action.signature.person.email_addresses.length) {
          newData.email = action.signature.person.email_addresses[0]
          // TODO: possibly generate an md5hash here
        }
        if (action.signature.person.postal_addresses
            && action.signature.person.postal_addresses.length) {
          const address = action.signature.person.postal_addresses[0]
          newData.zip = address.postal_code
          newData.state = address.region
          newData.country = address.country_name
        }
        return Object.assign({}, state, newData)
      } else {
        return state
      }
      break;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  petitionStore: petitionReducer,
  userStore: userReducer
})

export default rootReducer
