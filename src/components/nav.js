import React from 'react'

const Nav = (props) => (
    <nav className='header cleafix'>
      <div className='container' id='header'>
        <div className='row'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' aria-expanded='false' aria-controls='navbar'>Toggle navigation</button>
            <a className='navbar-brand' href='https://petitions.moveon.org/'></a>
          </div>
          <div id='navbar' className='navbar-collapse'>
            <ul className='nav navbar-nav navbar-right nav-primary'>
              <li><a href='https://petitions.moveon.org/create_start.html?source=topnav'><span className='icon icon-start'></span>Start a<br />petition</a></li>
              <li><a href='https://petitions.moveon.org/dashboard.html?source=topnav'><span className='icon icon-managepetitions'></span>Manage<br />Petitions</a></li>
              <li><a href='https://civic.moveon.org/donatec4/creditcard.html?cpn_id=511'><span className='icon icon-donate'></span>Donate</a></li>
              <li>
                <ul className='list-unstyled'>
                  <li><a className='lh-14 navlink' href='https://petitions.moveon.org/campaign_tips.html'>Campaign Tips</a></li>
                  <li><a className='lh-14 navlink' href='https://petitions.moveon.org/about.html'>About</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )

export default Nav
