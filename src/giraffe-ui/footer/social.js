import React from 'react'
import { Link } from 'react-router'

export const Social = () => (
  <div className='footer__social'>
    <Link to='http://www.facebook.com/moveon'>
      <svg><use xlinkHref='#facebook'></use></svg>
    </Link>
    <Link to='http://www.twitter.com/moveon'>
      <svg><use xlinkHref='#twitter'></use></svg>
    </Link>
    <Link to='https://www.instagram.com/moveon'>
      <svg><use xlinkHref='#instagram'></use></svg>
    </Link>
  </div>
)

export default Social
