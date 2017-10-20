import React from 'react'

const Footer = (props) => (
    <div className='footer'>
      <div className='container'>
        <div className='row row-fluid'>
          <h1 className='moveon-masthead'>
            <a href='#'>MoveOn.org&reg;</a>
          </h1>
          <ul className='nav nav-primary'>
            <li><a href='http://http://petitions.moveon.org/create_start.html?source=bnav'><span className='icon icon-start'></span>Start a<br />petition</a></li>
            <li><a href='http://petitions.moveon.org/dashboard.html'><span className='icon icon-managepetitions'></span> Manage<br />Petitions</a></li>
            <li><a href='https://civic.moveon.org/donatec4/creditcard.html?cpn_id=511'><span className='icon icon-donate'></span> Donate</a></li>
          </ul>
        </div>
        <div className='row row-fluid'>
          <ul className='nav nav-secondary'>
            <li><a className='lh-14 navlink' href='http://petitions.moveon.org/about.html'>About</a></li>
            <li><a href='http://petitions.moveon.org/organizations.html'>Organizations</a></li>
            <li><a href='http://front.moveon.org/category/victories/'>Victories</a></li>
            <li><a href='http://pol.moveon.org/feedback/press/'>Press</a></li>
            <li><a href='http://petitions.moveon.org/feedback.html'>Contact</a></li>
            <li><a href='http://front.moveon.org/blog/'>Blog</a></li>
            <li><a href='http://petitions.moveon.org/login/register.html'>Sign Up</a></li>
            <li><a href='http://petitions.moveon.org/privacy.html'>Privacy Policy</a></li>
            <li><a href='http://petitions.moveon.org/terms.html'>Terms of Use</a></li>
            <li><a href='http://front.moveon.org/careers'>Careers</a></li>
          </ul>
          <ul className='unstyled social'>
            <li><a href='http://www.facebook.com/moveon'><span className='icon icon-fb'></span>Follow us on Facebook</a></li>
            <li><a href='http://www.twitter.com/moveon'><span className='icon icon-twitter'></span>Follow us on Twitter</a></li>
            <li><a href='http://civic.moveon.org/keepmeposted/'><span className='icon icon-join'></span>Newsletter Signup</a></li>
          </ul>
          <div className='disclaimer'>
            <p>A joint website of MoveOn.org Civic Action and MoveOn.org Political Action.</p>
            <p><a href='http://civic.moveon.org/'>MoveOn.org Civic Action</a> is a 501(c)(4) organization which primarily focuses on nonpartisan education and advocacy on important national issues. MoveOn.org Political Action is a federal political committee which primarily helps members elect candidates who reflect our values through a variety of activities aimed at influencing the outcome of the next election. MoveOn.org Political Action and MoveOn.org Civic Action are separate organizations.</p>
          </div>
        </div>
      </div>
    </div>
  )

export default Footer
