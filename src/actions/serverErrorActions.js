export const actionTypes = {
  SERVER_ERROR: 'SERVER_ERROR',
  NO_SERVER_ERROR: 'NO_SERVER_ERROR'
}

export function checkServerError() {
  // Will be set on the page by the server
  if (window && window.error) {
    return {
      type: actionTypes.SERVER_ERROR,
      error: window.error
    }
  }
  return {
    type: actionTypes.NO_SERVER_ERROR
  }
}
