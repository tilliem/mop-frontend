import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

export const Card = ({
  heading,
  children,
  className,
  center,
  reducePadding
}) => (
  <div className={className}>
    <div
      className={cx('card', { 'card--center': center, 'p-4': reducePadding })}
    >
      <div className='card__content'>
        <div className='card__heading'>{heading}</div>
        <div className='card__body'>{children}</div>
      </div>
    </div>
  </div>
)

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  heading: PropTypes.node,
  center: PropTypes.bool,
  reducePadding: PropTypes.bool
}
