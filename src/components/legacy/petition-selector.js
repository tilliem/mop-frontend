import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const PetitionSelector = ({
  currentPetition: p,
  otherPetitions,
  onSelectPetition
}) => (
  <div className='span3'>
    <h3 className='stumpy'>Other campaigns</h3>

    {otherPetitions.length ? (
      <div>
        <div>
          <select onChange={onSelectPetition} id='select_petition'>
            <option value={p.petition_id}>{p.title}</option>
            {otherPetitions.map(opt => (
              <option key={opt.petition_id} value={opt.petition_id}>
                {opt.title}
              </option>
            ))}
            <option value='more'>more...</option>
          </select>
        </div>

        <div className='size-small'>
          <Link to='/your_petitions.html'>
            <b>all your petitions</b>
          </Link>
          <br />
          <Link to='/create_start.html?source=dashboard'>
            start a new petition
          </Link>
        </div>
      </div>
    ) : (
      <Link to='/create_start.html?source=dashboard'>
        <div className='button background-moveon-bright-red'>
          Start a new petition
        </div>
      </Link>
    )}
  </div>
)

PetitionSelector.propTypes = {
  currentPetition: PropTypes.object.isRequired,
  otherPetitions: PropTypes.array.isRequired,
  onSelectPetition: PropTypes.func
}

export default PetitionSelector
