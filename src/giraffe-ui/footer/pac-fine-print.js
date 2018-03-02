import React from 'react'
import { Link } from 'react-router'
export const PACFinePrint = () => (
  <div className='footer__fineprint'>
    Paid for in part by{' '}
    <Link to='http://pol.moveon.org/'>
      <strong>MoveOn Political Action</strong>
    </Link>. Not authorized by any candidate or candidate’s committee.
  </div>
)
