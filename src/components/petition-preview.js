import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import { text2paraJsx } from '../lib.js'

const PetitionPreview = ({ petition, source }) => {
  const url = `/sign/${petition.name}?source=${source}`
  const statement = text2paraJsx(petition.summary)
  return (
    <div>
      <article>
        <div>
          <h4><Link to={url} className='signthistitle'>{petition.title}</Link></h4>
          <p className='blurb'>{statement}</p>
        </div>
        <div className='pull-left'>
          <Link to={url} className='button background-moveon-bright-red'>Sign this petition</Link>
        </div>
        <div className='pull-left petition-byline'>
          <p className='byline lh-14'>by {petition.contact_name}</p>
        </div>
      </article>
      <div className='clear'></div>
    </div>
  )
}

PetitionPreview.propTypes = {
  petition: PropTypes.object.isRequired,
  source: PropTypes.string
}

export default PetitionPreview
