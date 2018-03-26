import React from 'react'
import PropTypes from 'prop-types'

export const PreviousButton = ({ onClick, visible }) =>
  visible && (
    <li className='previous'>
      <a onClick={onClick}>&lt; &lt; Previous</a>
    </li>
  )
PreviousButton.propTypes = { onClick: PropTypes.func, visible: PropTypes.bool }

export const NextButton = ({ onClick, visible }) =>
  visible && (
    <li className='next'>
      <a onClick={onClick}>Next &gt; &gt;</a>
    </li>
  )
NextButton.propTypes = { onClick: PropTypes.func }

export const Pager = ({ previousButton, nextButton }) => (
  <ul className='pager'>
    {previousButton}
    {nextButton}
  </ul>
)
Pager.propTypes = {
  previousButton: PropTypes.node,
  nextButton: PropTypes.node
}
