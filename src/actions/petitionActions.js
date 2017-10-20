import 'whatwg-fetch'

import Config from '../config.js'

export const actionTypes = {
  FETCH_PETITION_REQUEST: 'FETCH_PETITION_REQUEST',
  FETCH_PETITION_SUCCESS: 'FETCH_PETITION_SUCCESS',
  FETCH_PETITION_FAILURE: 'FETCH_PETITION_FAILURE',

  PETITION_SIGNATURE_SUBMIT: 'PETITION_SIGNATURE_SUBMIT',
  PETITION_SIGNATURE_SUCCESS: 'PETITION_SIGNATURE_SUCCESS',
  PETITION_SIGNATURE_FAILURE: 'PETITION_SIGNATURE_FAILURE'
}

export function loadPetition(petitionSlug) {
  const urlKey = `petitions/${petitionSlug}`
  if (global && global.preloadObjects && global.preloadObjects[urlKey]) {
    console.log('using preloadedData')
    return {
      type: actionTypes.FETCH_PETITION_SUCCESS,
      petition: window.preloadObjects[urlKey]
    }
  } else {
    return (dispatch) => {
      console.log('async from actions/loadPetition')
      dispatch({
        type: actionTypes.FETCH_PETITION_REQUEST,
        slug: petitionSlug
      })
      return fetch(`${Config.API_URI}/api/v1/${urlKey}.json`)
        .then(
          (response) => response.json().then((json) => {
            dispatch({
              type: actionTypes.FETCH_PETITION_SUCCESS,
              petition: json,
              slug: petitionSlug
            })
          }),
          (err) => {
            dispatch({
              type: actionTypes.FETCH_PETITION_FAILURE,
              error: err,
              slug: petitionSlug
            })
          }
        )
    }
  }
}

export function signPetition(petitionSignature, petition) {
  return (dispatch) => {
    console.log('from actions/signPetition', petition, petitionSignature)
    dispatch({
      type: actionTypes.PETITION_SIGNATURE_SUBMIT,
      petition,
      signature: petitionSignature
    })
    // TODO: actually submit signature
    dispatch({
      type: actionTypes.PETITION_SIGNATURE_SUCCESS,
      petition,
      signature: petitionSignature
    })
  }
}

export const actions = {
  loadPetition,
  signPetition
}
