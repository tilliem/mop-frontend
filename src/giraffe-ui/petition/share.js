import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import cx from 'classnames'

export const Share = ({
  className,
  hasLabels,
  mail,
  facebook,
  tweet,
  link
}) => {
  const el = hasLabels ? 'share__item' : 'share-icon'
  const elementCn = `${className}__${el}`
  return (
    <div className={`${className}__share`}>
      <strong className={`${className}__share-heading`}>Share</strong>
      <div className={`${className}__share-${hasLabels ? 'items' : 'icons'}`}>
        <Link
          to='#'
          onClick={mail}
          className={cx(elementCn, `${elementCn}--mail`)}
        >
          <svg><use xlinkHref='#mail'></use></svg>
          {hasLabels && 'Email'}
        </Link>
        <Link to='#' onClick={facebook} className={elementCn}>
          <svg><use xlinkHref='#facebook'></use></svg>
          {hasLabels && 'Facebook'}
        </Link>
        <Link to='#' onClick={tweet} className={elementCn}>
          <svg><use xlinkHref='#twitter'></use></svg>
          {hasLabels && 'Twitter'}
        </Link>
        <Link to='#' onClick={link} className={elementCn}>
          <svg><use xlinkHref='#link'></use></svg>
          {hasLabels && 'Copy Link'}
        </Link>
      </div>
    </div>
  )
}

Share.propTypes = {
  hasLabels: PropTypes.bool,
  className: PropTypes.string,
  mail: PropTypes.func,
  facebook: PropTypes.func,
  tweet: PropTypes.func,
  link: PropTypes.func
}
