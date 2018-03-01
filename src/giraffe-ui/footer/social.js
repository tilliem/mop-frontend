import React from 'react'
import { Link } from 'react-router'

import FacebookSvg from '../svgs/facebook.svg'
import TwitterSvg from '../svgs/twitter.svg'
import InstagramSvg from '../svgs/instagram.svg'

export const Social = () => (
  <div className='footer__social'>
    <Link to='http://www.facebook.com/moveon'>
      <FacebookSvg />
    </Link>
    <Link to='http://www.twitter.com/moveon'>
      <TwitterSvg />
    </Link>
    <Link to='https://www.instagram.com/moveon'>
      <InstagramSvg />
    </Link>
  </div>
)

export default Social
