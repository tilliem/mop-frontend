import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

import CaretRightSvg from '../svgs/caret-right.svg'

export const Details = ({ children }) => (
  <div className='petition-details col-10 col-lg-12 my-5'>
    <div className='petition-details__content'>{children}</div>
  </div>
)

Details.propTypes = { children: PropTypes.node }

export const Narrative = ({ children, heading }) => (
  <div className='petition-details__narrative'>
    <p>
      <strong>{heading}</strong>
    </p>
    {children}
  </div>
)
Narrative.propTypes = { children: PropTypes.node, heading: PropTypes.string }
Details.Narrative = Narrative

export const Comments = ({ children, heading }) => (
  <div className='petition-details__comments' id='comments'>
    <h4 className='petition-details__comments__heading'>{heading}</h4>
    <div className='petition-details__comments__entries'>{children}</div>
  </div>
)
Comments.propTypes = { children: PropTypes.node, heading: PropTypes.string }
Details.Comments = Comments

export const Author = ({ name, link, logo }) => (
  <div className='petition-details__author'>
    <h4 className='petition-details__author__heading'>Author</h4>
    <div className='petition-details__author__name'>
      {logo && <div>{logo}</div>}
      {name}
    </div>
    <Link to={link} className='petition-details__author__cta'>
      CONTACT
      <CaretRightSvg />
    </Link>
  </div>
)
Author.propTypes = { name: PropTypes.string, link: PropTypes.string, logo: PropTypes.node }
Details.Author = Author

export const Disclaimer = ({ children }) => (
  <div className='petition-details__disclaimer'>{children}</div>
)
Disclaimer.propTypes = { children: PropTypes.node }
Details.Disclaimer = Disclaimer
