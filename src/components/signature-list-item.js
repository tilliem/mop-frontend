import React from 'react'
import PropTypes from 'prop-types'

import { formatDate } from '../lib.js'

const SignatureListItem = ({ signature, number }) => {
  const { user } = signature
  const { city, state } = user
  const location = (city === '') ? state : `${city}, ${state}`
  const fromLocation = (location === '') ? '' : ` from ${location}`
  const date = new Date(signature.created_date)
  return (
    <li className='signer'>
      <span className='signer-number'>{number}</span>
      <b>{signature.user.name}</b> {fromLocation} signed this petition on {formatDate(date)}.
    </li>
  )
}

SignatureListItem.propTypes = {
  signature: PropTypes.object,
  number: PropTypes.number
}

export default SignatureListItem
