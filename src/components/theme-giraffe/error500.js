import React from 'react'

export const Error500 = () => (
  <div className='container'>
    <div className='row my-5'>
      <div className='col-12 col-md-7'>
        <h1 className='text-align-center'>Uh-oh — it looks like something went wrong</h1>
        <p className='text-align-center'>
          We’re sorry about that! Please go back and try again. If you’re still
          having trouble, shoot us a note at{' '}
          <a href='mailto:help@moveon.org'>help@moveon.org</a>.
        </p>
      </div>
      <div className='col-12 col-md-5 order-md-first'>
        <img src='https://static.moveon.org/giraffe/images/error500.svg' alt='500 error' />
      </div>
    </div>
  </div>
)
