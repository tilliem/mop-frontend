import React from 'react'
import PropTypes from 'prop-types'

const article = {
  maxWidth: '100%'
}

export const Victories = ({ victories }) => (
  <div id='current-stories' className='span6 widget clearfix pull-left'>
    <div className='widget-top clearfix'>
      <h3>Recent Victories</h3>
      <a
        className='more-small'
        href='https://front.moveon.org/category/victories/'
      >
        +more
      </a>
    </div>

    {victories.map(({ link, image, title, text }) => (
      <article key={link} className='blurb-block' style={article}>
        <a href={link}>
          <img
            src={image.src}
            className='attachment-featured_thumb wp-post-image'
            alt={image.alt}
          />
          <h4>{title}</h4>
        </a>
        <p className='blurb'>
          {text}
          <a href={link}>(Read More)</a>
        </p>
      </article>
    ))}
  </div>
)

Victories.propTypes = {
  victories: PropTypes.array
}
