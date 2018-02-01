import 'whatwg-fetch'

import Config from '../config.js'

export const actionTypes = {
  REGISTER_SUBMIT: 'REGISTER_SUBMIT',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS'
}

export function register(fields) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.REGISTER_SUBMIT
    })
    return fetch(`${Config.API_URI}/users/register.json`, {
      method: 'POST',
      body: JSON.stringify(fields)
    })
      .then(
        (response) => response.json().then(() => {
          if (false) {
            // login user if valid and route user to https://petitions.moveon.org/no_petition.html
            // otherwise disatch failure with errors
            dispatch({
              type: actionTypes.REGISTER_SUCCESS,
              nice: 'nice'
            })
          } else {
            dispatch({
              type: actionTypes.REGISTER_FAILURE,
              formErrors: [{ message: 'failed to register user' }]
            })
          }
        })
      )
      .catch(() => {
        dispatch({
          type: actionTypes.REGISTER_FAILURE,
          formErrors: [{ message: 'server error: account was not created' }]
        })
      })
  }
}

export function forgotPassword(email) {
  // We don't care much about the response in this case
  return fetch(`${Config.API_URI}/users/forgotPassword.json`, {
    method: 'POST',
    body: JSON.stringify({ email })
  })
    .then(() => true)
    .catch(() => true)
}

export const actions = {
  register,
  forgotPassword
}
