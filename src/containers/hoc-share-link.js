import React from 'react'
import PropTypes from 'prop-types'
import { petitionShortCode } from '../lib'

export function withShareLink(WrappedComponent) {
  const ShareLink = ({ shortLinkMode, shortLinkArgs, ...otherProps }) => (
    <WrappedComponent
      {...otherProps}
      rawLink={petitionShortCode(shortLinkMode, ...shortLinkArgs)}
    />
  )

  ShareLink.propTypes = {
    shortLinkMode: PropTypes.string,
    shortLinkArgs: PropTypes.array
  }

  return ShareLink
}
