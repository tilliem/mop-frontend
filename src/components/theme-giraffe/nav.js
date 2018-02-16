import React from 'react'
import PropTypes from 'prop-types'

import {
  Primary,
  Secondary,
  NavLink,
  Header,
  Logo,
  MoNav
} from './components/nav'

import DocumentSvg from './svgs/document-add.svg'

const Nav = ({
  toggleOpen,
  close,
  isOpenMobile,
  openSections,
  toggleSection
}) => (
  <Header toggleOpen={toggleOpen}>
    <Logo />
    <MoNav isOpenMobile={isOpenMobile} close={close}>
      <Primary openSections={openSections} toggleSection={toggleSection}>
        <Primary.Section name='Petitions'>
          <NavLink to='/'>Browse Petitions</NavLink>
          <NavLink to='/create_start.html?source=topnav'>
            Start A Petition
          </NavLink>
          <NavLink to='/dashboard.html?source=topnav'>Manage Petitions</NavLink>
        </Primary.Section>

        <Primary.Section name='Campaigns'>
          <NavLink to='/'>Sublink 1</NavLink>
          <NavLink to='/'>Sublink 2</NavLink>
          <NavLink to='/'>Sublink 3</NavLink>
        </Primary.Section>

        {/* More Top level */}
        <NavLink to='/'>Events</NavLink>
        <NavLink to='/about.html'>About Us</NavLink>
      </Primary>
      <Secondary>
        <Secondary.Top>
          <NavLink to='/'>News</NavLink>
          <NavLink to='/'>Store</NavLink>
        </Secondary.Top>
        <Secondary.Bottom>
          <NavLink to='/'>Join</NavLink>
          <NavLink to='https://civic.moveon.org/donatec4/creditcard.html?cpn_id=511'>
            Donate
          </NavLink>
          <NavLink to='/create_start.html?source=topnav'>
            <DocumentSvg />Start A Petition
          </NavLink>
        </Secondary.Bottom>
      </Secondary>
    </MoNav>
  </Header>
)

Nav.propTypes = {
  user: PropTypes.object,
  nav: PropTypes.object,
  organization: PropTypes.string,
  minimal: PropTypes.bool,
  toggleOpen: PropTypes.func,
  close: PropTypes.func,
  isOpenMobile: PropTypes.bool,
  openSections: PropTypes.arrayOf(PropTypes.string),
  toggleSection: PropTypes.func
}

export default Nav
