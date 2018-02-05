import React from 'react'
import PropTypes from 'prop-types'
import PetitionPreview from './petition-preview'

const HotPetitions = ({ fullWidth, topPetitions, source }) => (
  <div
    id='campaign-widget'
    className={
      fullWidth ? 'span12 widget clearfix' : 'span6 widget clearfix pull-right'
    }
  >
    <div className='widget-top'>
      <h3>Hot Petitions</h3>
    </div>
    {topPetitions &&
      topPetitions.map(petition => (
        <PetitionPreview
          key={petition.petition_id}
          petition={petition}
          source={source}
        />
      ))}
  </div>
)

HotPetitions.propTypes = {
  fullWidth: PropTypes.bool,
  topPetitions: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  source: PropTypes.string
}

export default HotPetitions
