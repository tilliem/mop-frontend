import React from 'react'
import PropTypes from 'prop-types'

import { text2paraJsx } from '../lib.js'

const PetitionPreview = ({ petition, source }) => {
  const url = `/sign/${petition.name}?source=${source}`
  const statement = text2paraJsx(petition.summary)
  return (
    <div>
      <article>
        <div>
          <h4><a href={url} className="signthistitle">{petition.title}</a></h4>
          <p className="blurb">{statement}</p>
        </div>
        <div className="pull-left">
          <a href={url} className="button background-moveon-bright-red">Sign this petition</a>
        </div>
        <div className="pull-left petition-byline">
          <p className="byline lh-14">by {petition.contact_name}</p>
        </div>
      </article>
      <div className="clear"></div>
    </div>
  )
}

PetitionPreview.propTypes = {
  petition: PropTypes.object.isRequired,
}

export default PetitionPreview
