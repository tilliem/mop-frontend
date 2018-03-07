import React from 'react'
import PropTypes from 'prop-types'

import { formatNumber, percent } from '../../lib'

import CaretRightSvg from 'GiraffeUI/svgs/caret-right.svg'

export const Card = ({
  heading,
  children,
  currentSignatures,
  goalSignatures,
  renderShare
}) => (
  <div className='petition-card'>
    <div className='petition-card__content'>
      <div className='petition-card__heading'>{heading}</div>

      <div className='petition-card__body'>{children}</div>

      <div className='petition-card__range'>
        <div className='petition-card__range__current'>
          {formatNumber(currentSignatures)}
        </div>
        <div className='petition-card__range__max'>
          {formatNumber(goalSignatures)}
        </div>
        <div className='petition-card__range__bar'>
          <div className='petition-card__range__bar__max' />
          <div
            className='petition-card__range__bar__current'
            style={{ width: percent(currentSignatures, goalSignatures) }}
          />
        </div>
      </div>

      {/* TODO: Implement some action for this CTA */}
      <button className='mo-btn petition-card__cta' data-modal='signers-modal'>
        MOST RECENT SIGNERS
        <CaretRightSvg />
      </button>
      {renderShare}
    </div>
  </div>
)

Card.propTypes = {
  children: PropTypes.node,
  renderShare: PropTypes.node,
  heading: PropTypes.node,
  currentSignatures: PropTypes.number,
  goalSignatures: PropTypes.number
}

export const Media = ({ imageUrl }) => (
  <div className='petition-card__media'>
    <div className='media'>
      <img src={imageUrl} role='presentation' />
    </div>
  </div>
)
Media.propTypes = { imageUrl: PropTypes.string }
Card.Media = Media

export const Description = ({ children }) => (
  <div className='petition-card__description'>{children}</div>
)
Description.propTypes = { children: PropTypes.node }
Card.Description = Description

export default Card
