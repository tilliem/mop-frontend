import 'whatwg-fetch'

import Config from '../config.js'

export const actionTypes = {
  ANONYMOUS_SESSION_START: 'ANONYMOUS_SESSION_START',
  UNRECOGNIZE_USER_SESSION: 'UNRECOGNIZE_USER_SESSION',
  USER_SESSION_START: 'USER_SESSION_START',
  USER_SESSION_FAILURE: 'USER_SESSION_FAILURE'
}

export function unRecognize() {
  return (dispatch) => {
    dispatch({
      type: actionTypes.UNRECOGNIZE_USER_SESSION
    })
  }
}

function callSessionApi(tokens) {
  return (dispatch) => {
    const args = Object.keys(tokens)
      .map((k) => ((tokens[k]) ? `${encodeURIComponent(k)}=${encodeURIComponent(tokens[k])}` : ''))
      .join('&')
    const queryString = (args && args !== '&') ? `?${args}` : ''
    fetch(`${Config.API_URI}/user/session.json${queryString}`, {
      credentials: 'include'
    })
    .then(
      (response) => response.json().then((json) => {
        dispatch({
          type: actionTypes.USER_SESSION_START,
          session: json,
          tokens
        })
      }),
      (err) => {
        dispatch({
          type: actionTypes.USER_SESSION_FAILURE,
          error: err,
          tokens
        })
      }
    )
  }
}

export const loadSession = ({ location }) => {
  // Called straigt from top route onEnter, so it's done only once on first-load

  // A cookie doesn't actually indicate authenticated -- we just mark the session differently
  const cookie = String(document.cookie).match(new RegExp(`${Config.SESSION_COOKIE_NAME}=([^;]+)`))

  if (cookie
      || (location && location.query
          && (location.query.akid || location.query.id))) {
    const tokens = {}
    if (location.query.akid) {
      tokens.akid = location.query.akid
    }
    if (location.query.id) {
      tokens.hashedId = location.query.id
    }
    return callSessionApi(tokens)
  }
  // If there was no cookie or tokens, we don't even need to call the api
  return (dispatch) => {
    dispatch({
      type: actionTypes.ANONYMOUS_SESSION_START
    })
  }
}

export const actions = {
  unRecognize,
  loadSession
}
