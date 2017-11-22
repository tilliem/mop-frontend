import 'whatwg-fetch'

import Config from '../config.js'
import { appLocation } from '../routes.js'

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
            slug: json.name || petitionSlug
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

    const completion = function(data) {
      const finalDispatch = (text) => {
        const dispatchData = {
          type: actionTypes.PETITION_SIGNATURE_SUCCESS,
          petition,
          signature: petitionSignature
        }
        if (text) {
          const sqsResponse = text.match(/\<MessageId\>(.*)\<\/MessageId\>/)
          if (sqsResponse) {
            dispatchData.messageId = sqsResponse[1]
          }
        }
        dispatch(dispatchData)
      }
      if (data && typeof data.text == 'function') {
        data.text().then(finalDispatch)
      } else {
        finalDispatch()
      }
    }
    if (Config.API_WRITABLE) {
      fetch(`${Config.API_URI}/sign-petition`, {
        method: 'POST',
        body: JSON.stringify(petitionSignature)
      }).then(completion, function(err) {
        dispatch({
          type: actionTypes.PETITION_SIGNATURE_FAILURE,
          petition,
          signature: petitionSignature,
          error: err
      })
      })
    } else {
      completion()
    }
  }
}

export const registerSignatureAndThanks = (petition) => {
  return (dispatch) => {
    // 1. track petition success
    if (window.fbq) {
      fbq('track', 'Lead') // facebook lead
    }
    // 2. show thanks page
    let thanks_url = 'thanks.html'
    if (petition.thanks_url) {
      if (/^https?:\/\//.test(petition.thanks_url)) {
        document.location = petition.thanks_url // TODO: maybe add some query params
        return
      } else {
        thanks_url = petition.thanks_url
      }
    }
    appLocation.push(`${thanks_url}?petition_id=${
      petition.petition_id
    }&name=${petition.name}`)
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
  registerSignatureAndThanks,
  loadPetitionSignatures
}
