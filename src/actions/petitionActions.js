import 'whatwg-fetch'

import Config from '../config.js'

export const actionTypes = {
  FETCH_PETITION_REQUEST: 'FETCH_PETITION_REQUEST',
  FETCH_PETITION_SUCCESS: 'FETCH_PETITION_SUCCESS',
  FETCH_PETITION_FAILURE: 'FETCH_PETITION_FAILURE',

  FETCH_PETITION_SIGNATURES_REQUEST: 'FETCH_PETITION_SIGNATURES_REQUEST',
  FETCH_PETITION_SIGNATURES_SUCCESS: 'FETCH_PETITION_SIGNATURES_SUCCESS',
  FETCH_PETITION_SIGNATURES_FAILURE: 'FETCH_PETITION_SIGNATURES_FAILURE',

  PETITION_SIGNATURE_SUBMIT: 'PETITION_SIGNATURE_SUBMIT',
  PETITION_SIGNATURE_SUCCESS: 'PETITION_SIGNATURE_SUCCESS',
  PETITION_SIGNATURE_FAILURE: 'PETITION_SIGNATURE_FAILURE'
}

export function loadPetition(petitionSlug) {
  const urlKey = `petitions/${petitionSlug}`
  if (global && global.preloadObjects && global.preloadObjects[urlKey]) {
    return (dispatch) => {
      dispatch({
        type: actionTypes.FETCH_PETITION_SUCCESS,
        petition: window.preloadObjects[urlKey],
        slug: petitionSlug
      })
    }
  }
  return (dispatch) => {
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
            slug: json.slug
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

export function signPetition(petitionSignature, petition) {
  return (dispatch) => {
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

export const loadPetitionSignatures = (petitionSlug, page = 1) => {
  const urlKey = `petitions/${petitionSlug}/signatures`
  return (dispatch) => {
    dispatch({
      type: actionTypes.FETCH_PETITION_SIGNATURES_REQUEST,
      slug: petitionSlug,
      page
    })
    return fetch(`${Config.API_URI}/api/v1/${urlKey}.json?per_page=10&page=${page}`)
      .then(
        (response) => response.json().then((json) => {
          dispatch({
            type: actionTypes.FETCH_PETITION_SIGNATURES_SUCCESS,
            signatures: json,
            slug: petitionSlug,
            page
          })
        }),
        (err) => {
          dispatch({
            type: actionTypes.FETCH_PETITION_SIGNATURES_FAILURE,
            error: err,
            slug: petitionSlug,
            page
          })
        }
      )
  }
}

export const actions = {
  loadPetition,
  signPetition,
  loadPetitionSignatures
}
