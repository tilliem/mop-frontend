import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

export const Card = ({ heading, children, className }) => (
  <div className={cx('card', 'col-12', className)}>
    <div className='card__content'>
      <div className='card__heading'>{heading}</div>
      <div className='card__body'>{children}</div>
    </div>
  </div>
)

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  heading: PropTypes.node
}
