import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

export const PetitionFlag = ({
  petition,
  reasonsArray,
  isOpen,
  setOpen,
  setClosed,
  flagged,
  submitFlag
}) => {
  const reasons = reasonsArray.map(([reason, description]) => (
    <span key={reason}>
      <button
        className='button background-moveon-bright-red'
        style={{ margin: '2px' }}
        onClick={() => submitFlag(reason)}
      >
        {description}
      </button>
    </span>
  ))

  return flagged ? (
    <div>
      <h1 className='legend'>Thanks for flagging this petition.</h1>
      <p>
        If any petition receives enough flags from different users, we’ll review
        it and remove it from the site if it violates our policies.
      </p>
      <p>
        <Link to='/'>Return to home page</Link>
      </p>
    </div>
  ) : (
    <div>
      <span className='bell'>
        MoveOn has not yet reviewed this petition. If you agree with it, please
        sign it!
      </span>
      <a
        id='flag'
        className=''
        onClick={setOpen}
        style={{ marginLeft: '15px', marginTop: '-5px' }}
      >
        <i className='icon-flag' /> flag the petition
      </a>
      {isOpen && (
        <div>
          <div id='flag-petition-reasons' style={{ display: 'block' }}>
            <span>Choose reason:</span>
            {reasons}
            <span className='flag-petition-close-item'>
              <a onClick={setClosed} className='flag-petition-close'>
                <small>never mind</small>
              </a>
            </span>
          </div>
          <form id='flag-petition-form' method='POST' action='/flag.html'>
            <input
              type='hidden'
              name='petition_id'
              value={petition.petition_id}
            />
            <input
              id='flag-petition-form-reason'
              type='hidden'
              name='reason'
              value=''
            />
          </form>
        </div>
      )}
    </div>
  )
}

PetitionFlag.propTypes = {
  petition: PropTypes.object,
  reasonsArray: PropTypes.array,
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
  setClosed: PropTypes.func,
  flagged: PropTypes.bool,
  submitFlag: PropTypes.func
}

export default PetitionFlag
