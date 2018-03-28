import React from 'react'
import PropTypes from 'prop-types'

import { text2paraJsx, ellipsize } from '../lib'

import { Blurb as BlurbComponent } from 'LegacyTheme/blurb'

const Blurb = ({ petition, source }) => {
  const url = `/sign/${petition.name}?source=${source}`
  const statement = text2paraJsx(ellipsize(petition.summary, 500))
  return (
    <BlurbComponent
      title={petition.title}
      statement={statement}
      url={url}
      by={petition.contact_name}
    />
  )
}

Blurb.propTypes = {
  petition: PropTypes.object.isRequired,
  source: PropTypes.string
}

export default Blurb
