import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

export const Blurb = ({ title, children, url, image, byline, cta }) => (
  <div className='blurb py-3'>
    <Link to={url}>
      {image && (
        <img className='blurb__media my-1' src={image.src} alt={image.alt} />
      )}
      <h4>{title}</h4>
    </Link>
    {byline && <div className='blurb__byline'>{byline}</div>}
    <div className='blurb__text mt-3'>{children}</div>
    {cta && <div className='blurb__cta'>{cta}</div>}
  </div>
)

Blurb.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
  byline: PropTypes.node,
  children: PropTypes.node,
  cta: PropTypes.node
}
