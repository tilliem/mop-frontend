import 'whatwg-fetch'
import Config from '../config.js'

import { actionTypes as accountActionTypes } from './accountActions'

export const actionTypes = {
  CREATE_PETITION_PREVIEW_SUBMIT: 'CREATE_PETITION_PREVIEW_SUBMIT',
  CREATE_SUCCESS: 'CREATE_PETITION_SUCCESS',
  CREATE_FAILURE: 'CREATE_PETITION_FAILURE',
  FETCH_TARGETS_REQUEST: 'FETCH_TARGETS_REQUEST',
  FETCH_TARGETS_SUCCESS: 'FETCH_TARGETS_SUCCESS',
  FETCH_TARGETS_FAILURE: 'FETCH_TARGETS_FAILURE'
}

export function previewSubmit({ title, summary, description, target }) {
  return {
    type: actionTypes.CREATE_PETITION_PREVIEW_SUBMIT,
    title,
    summary,
    description,
    target
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

export function registerAndSubmitPetition(userFields) {
  return (dispatch, getState) => {
    const { petitionCreateStore: petitionFields } = getState()
    console.log('hey hey hey, lets submit the petition')
    console.log(petitionFields)
    console.log(userFields)
    return (
      fetch(`${Config.API_URI}/users/register.json`, {
        method: 'POST',
        body: JSON.stringify({ user: userFields })
      })
        // .then(handleErrors)
        // .then(res => res.json())
        .then(res => {
          console.warn(res)
          dispatch({
            type: accountActionTypes.REGISTER_SUCCESS,
            nice: 'nice' // this one should log them in
          })
          // TODO add cookies
          return fetch(`${Config.API_URI}/users/petitions.json`, {
            method: 'POST',
            body: JSON.stringify({ petition: petitionFields })
          })
        })
        .then(handleErrors)
        .then(res => res.json())
        .then(res => {
          console.warn(res)
          dispatch({
            type: actionTypes.CREATE_SUCCESS,
            nice: 'nice2'
          })
        })
        .catch(err => {
          dispatch({
            type: actionTypes.CREATE_FAILURE
          })
          throw err
        })
    )
  }
}

export function loadTargets(group, geoState) {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.FETCH_TARGETS_REQUEST,
      group,
      geoState
    })
    const { petitionTargetStore } = getState()

    let url = `${Config.LEGACY_API_URI}/target_search.html?group=${group}`
    let storeKey = group

    if (group === 'state') {
      url += `&state=${geoState}`
      storeKey += `--${geoState}`
    }
    if (petitionTargetStore && petitionTargetStore[storeKey]) {
      return dispatch({
        type: actionTypes.FETCH_TARGETS_SUCCESS,
        targets: petitionTargetStore[storeKey],
        group,
        geoState,
        storeKey
      })
    }

    return fetch(url).then(
      response =>
        response.json().then(json => {
          dispatch({
            type: actionTypes.FETCH_TARGETS_SUCCESS,
            targets: json,
            group,
            geoState,
            storeKey
          })
        }),
      err => {
        dispatch({
          type: actionTypes.FETCH_TARGETS_FAILURE,
          error: err,
          group,
          geoState
        })
      }
    )
  }
}
