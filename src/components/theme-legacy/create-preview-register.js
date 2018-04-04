import React from 'react'
import PropTypes from 'prop-types'

import Register from '../../containers/register'

const inputStyle = {
  height: '17px',
  marginBottom: '5px',
  width: '95%'
}

export const CreatePreviewRegister = ({ successCallback }) => (
  <Register
    includeZipAndPhone
    successCallback={successCallback}
    form={({ errorList, handleSubmit, setRef }) => (
      <form onSubmit={handleSubmit}>
        <ul className='errors'>{errorList && errorList()}</ul>
        <input
          ref={setRef}
          required='required'
          name='name'
          type='text'
          placeholder='Name'
          style={inputStyle}
        />
        <input
          ref={setRef}
          required='required'
          name='email'
          type='text'
          placeholder='Email'
          style={inputStyle}
        />
        <input
          ref={setRef}
          autoComplete='off'
          name='phone'
          type='text'
          placeholder='Phone (optional)'
          style={inputStyle}
        />
        <input
          ref={setRef}
          required='required'
          name='zip'
          type='text'
          placeholder='ZIP Code'
          style={inputStyle}
        />
        <input
          ref={setRef}
          required='required'
          autoComplete='off'
          name='password'
          type='password'
          placeholder='Password'
          style={inputStyle}
        />
        <input
          ref={setRef}
          required='required'
          autoComplete='off'
          name='passwordConfirm'
          type='password'
          placeholder='Confirm Password'
          style={inputStyle}
        />

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

CreatePreviewRegister.propTypes = {
  successCallback: PropTypes.func
}
