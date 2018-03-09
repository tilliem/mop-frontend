import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

import {
  Nav,
  Logo,
  Text as FooterText,
  Social,
  PACFinePrint,
  MoFooter
} from 'GiraffeUI/footer'

import CaretRightSvg from 'GiraffeUI/svgs/caret-right.svg'
import DocumentSvg from 'GiraffeUI/svgs/document-add.svg'

export const Footer = ({ entity }) => (
  <MoFooter>
    <Logo />
    <MoFooter.Top>
      <Nav>
        <Nav.Links heading='Company'>
          <Link to='https://front.moveon.org/careers'>Careers</Link>
          <Link to=' https://petitions.moveon.org/organizations.html'>
            Partner with Us
          </Link>
          <Link to='https://front.moveon.org/blog/'>News</Link>
        </Nav.Links>
        <Nav.Links heading='Contact'>
          <Link to='https://front.moveon.org/frequently-asked-questions-and-contact-information/'>
            General Inquiries
          </Link>
          <Link to='https://front.moveon.org/frequently-asked-questions-and-contact-information/'>
            Petition Inquiries
          </Link>
          <Link to='https://act.moveon.org/survey/press/'>
            Press Inquiries
          </Link>
        </Nav.Links>
        <Nav.Links heading='Support'>
          <Link to='https://front.moveon.org/frequently-asked-questions-and-contact-information/'>
            FAQs
          </Link>
          <Link to='http://petitions.moveon.org/privacy.html'>
            Privacy Policy
          </Link>
          <Link to='http://petitions.moveon.org/terms.html'>Terms of Use</Link>
        </Nav.Links>
        <Nav.CallToAction
          copy={
            <span>
              GET INVOLVED <br />
              Passionate about an issue?
            </span>
          }
        >
          <Link to='http://petitions.moveon.org/create_start.html?source=homepage'>
            <DocumentSvg />
            Start A Petition
            <CaretRightSvg />
          </Link>
        </Nav.CallToAction>
      </Nav>

      <FooterText />
    </MoFooter.Top>
    <MoFooter.Bottom>
      <Social />
      {entity === 'pac' && <PACFinePrint />}
    </MoFooter.Bottom>
  </MoFooter>
)

Footer.propTypes = {
  entity: PropTypes.string
}

export default Footer
