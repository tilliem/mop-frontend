import React from 'react'
import PropTypes from 'prop-types'
import BurgerSvg from '../../svgs/burger.svg'

export const Header = ({ toggleOpen, children }) => (
  <header id='main-header' className='header'>
    <div className='mo-container'>
      {children}
      <button onClick={toggleOpen} className='mo-nav__toggle'>
        <BurgerSvg />
      </button>
    </div>
  </header>
)

Header.propTypes = {
  toggleOpen: PropTypes.func,
  children: PropTypes.node
}
