import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import MailSvg from '../svgs/mail.svg'
import FacebookSvg from '../svgs/facebook.svg'
import TwitterSvg from '../svgs/twitter.svg'
import LinkSvg from '../svgs/link.svg'
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
          onClick={mail}
          className={cx(elementCn, `${elementCn}--mail`)}
        >
          <MailSvg />
          {hasLabels && 'Email'}
        </Link>
        <Link onClick={facebook} className={elementCn}>
          <FacebookSvg />
          {hasLabels && 'Facebook'}
        </Link>
        <Link onClick={tweet} className={elementCn}>
          <TwitterSvg />
          {hasLabels && 'Twitter'}
        </Link>
        <Link onClick={link} className={elementCn}>
          <LinkSvg />
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
