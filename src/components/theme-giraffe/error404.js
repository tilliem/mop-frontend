import React from 'react'

export const Error404 = () => (
  <div className='container'>
    <div className='row my-5'>
      <div className='col-12'>
        <h1 className='text-align-center'>Oops — looks like what you’re looking for isn’t here!</h1>
        <p className='text-align-center'>
          Email us at <a href='mailto:help@moveon.org'>help@moveon.org</a> so we
          can help you find your way.
        </p>
        <img
          src='https://static.moveon.org/giraffe/images/error404.svg'
          alt='404 error'
        />
      </div>
    </div>
  </div>
)
