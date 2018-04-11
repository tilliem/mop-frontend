import React from 'react'
import PropTypes from 'prop-types'
import Blurb from '../../containers/blurb'

const HotPetitions = ({ topPetitions, source }) => (
  <div
    id='campaign-widget'
    className='span6 widget clearfix pull-right'
  >
    <div className='widget-top'>
      <h3>Hot Petitions</h3>
    </div>
    {topPetitions &&
      topPetitions.map(petition => (
        <Blurb
          key={petition.petition_id}
          petition={petition}
          source={source}
        />
      ))}
  </div>
)

HotPetitions.propTypes = {
  topPetitions: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  source: PropTypes.string
}

export default HotPetitions
