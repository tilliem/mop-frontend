import React from 'react'
import PropTypes from 'prop-types'

import UpdateUser from '../../containers/update-user'

const inputStyle = {
  height: '17px',
  marginBottom: '5px',
  width: '95%'
}

export const CreatePreviewUser = ({ user, successCallback }) => (
  <UpdateUser
    successCallback={successCallback}
    form={({ errorList, handleSubmit, setRef }) => (
      <form onSubmit={handleSubmit}>
        <ul className='errors'>{errorList && errorList()}</ul>
        {/* TODO: figure out what fields I need */}
        {!user.zip && (
          <input
            ref={setRef}
            name='zip'
            type='text'
            placeholder='Zip'
            style={inputStyle}
          />
        )}
        <button
          type='submit'
          className='xl percent-100 bump-top-3 background-moveon-bright-red'
          id='sign-here-button'
        >
          Launch petition
        </button>
      </form>
    )}
  />
)

CreatePreviewUser.propTypes = {
  successCallback: PropTypes.func,
  user: PropTypes.object
}
