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

  FETCH_TOP_PETITIONS_REQUEST: 'FETCH_TOP_PETITIONS_REQUEST',
  FETCH_TOP_PETITIONS_SUCCESS: 'FETCH_TOP_PETITIONS_SUCCESS',
  FETCH_TOP_PETITIONS_FAILURE: 'FETCH_TOP_PETITIONS_FAILURE',

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

export function loadTopPetitions(pac, megapartner) {
  let urlKey = 'top-petitions'
  if (pac === 1) {
    if (megapartner) {
      urlKey += `?megapartner=${megapartner}&pac=1`
    } else {
      urlKey += '?pac=1'
    }
  } else if (megapartner) {
    urlKey += `?megapartner=${megapartner}`
  }

  return (dispatch) => {
    dispatch({
      type: actionTypes.FETCH_TOP_PETITIONS_REQUEST,
      pac,
      megapartner
    })
    return fetch(`${Config.API_URI}/api/v1/${urlKey}.json`)
      .then(
        (response) => response.json().then((json) => {
          dispatch({
            type: actionTypes.FETCH_TOP_PETITIONS_SUCCESS,
            petitions: json._embedded,
            pac,
            megapartner
          })
        }),
        (err) => {
          dispatch({
            type: actionTypes.FETCH_TOP_PETITIONS_FAILURE,
            error: err,
            pac,
            megapartner
          })
        }
      )
  }
}

export const registerSignatureAndThanks = (petition) => () => {
  // 1. track petition success
  if (window.fbq) {
    window.fbq('track', 'Lead') // facebook lead
  }
  // 2. show thanks page
  let thanksUrl = 'thanks.html'
  if (petition.thanks_url) {
    if (/^https?:\/\//.test(petition.thanks_url)) {
      document.location = petition.thanks_url // TODO: maybe add some query params
      return
    }
    thanksUrl = petition.thanks_url
  }
  appLocation.push(`${thanksUrl}?petition_id=${
    petition.petition_id
  }&name=${petition.name}`)
}

export function signPetition(petitionSignature, petition, options) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.PETITION_SIGNATURE_SUBMIT,
      petition,
      signature: petitionSignature
    })

    const completion = (data) => {
      const finalDispatch = (text) => {
        const dispatchData = {
          type: actionTypes.PETITION_SIGNATURE_SUCCESS,
          petition,
          signature: petitionSignature
        }
        if (text) {
          const sqsResponse = text.match(/<MessageId>(.*)<\/MessageId>/)
          if (sqsResponse) {
            dispatchData.messageId = sqsResponse[1]
          }
        }
        const dispatchResult = dispatch(dispatchData)
        if (options && options.redirectOnSuccess) {
          registerSignatureAndThanks(dispatchResult.petition)(dispatch)
        }
      }
      if (data && typeof data.text === 'function') {
        data.text().then(finalDispatch)
      } else {
        finalDispatch()
      }
    }
    if (Config.API_WRITABLE) {
      fetch(`${Config.API_URI}/sign-petition`, {
        method: 'POST',
        body: JSON.stringify(petitionSignature)
      }).then(completion, (err) => {
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

export const recordShareClick = (petition, medium, source, user) => {
  if (window._gaq) {
    window._gaq.push(['_trackEvent', 'share', medium, petition.petition_id, 1])
  }
  if (Config.TRACK_SHARE_URL) {
    const params = {
      page: window.location.pathname,
      petition_id: petition.petition_id,
      user_id: user && user.signonId,
      medium,
      source
    }
    const form = new FormData()
    Object.keys(params).forEach(p => {
      form.append(p, params[p])
    })
    fetch(Config.TRACK_SHARE_URL, { // "/record_share_click.html"
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      body: form
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
    const dispatchError = (err) => {
      dispatch({
        type: actionTypes.FETCH_PETITION_SIGNATURES_FAILURE,
        error: err,
        slug: petitionSlug,
        page
      })
    }
    return fetch(`${Config.API_URI}/api/v1/${urlKey}.json?per_page=10&page=${page}`)
      .then(
        (response) => response.json().then((json) => {
          dispatch({
            type: actionTypes.FETCH_PETITION_SIGNATURES_SUCCESS,
            signatures: json,
            slug: petitionSlug,
            page
          })
        }, dispatchError),
        dispatchError
      )
  }
}

export const getSharebanditShareLink = (petitionSharebanditUrl) => {
  const jsonSampleUrl = petitionSharebanditUrl.replace('/r/0/', '/jsonaction/')
  const fallbackResponse = () => petitionSharebanditUrl
  return fetch(`${jsonSampleUrl}`).then(
    (success) => success.json().then(
      (jsonData) => jsonData.shareurl,
      fallbackResponse
    ),
    fallbackResponse)
}

export const actions = {
  loadPetition,
  signPetition,
  registerSignatureAndThanks,
  recordShareClick,
  loadPetitionSignatures,
  getSharebanditShareLink
}
