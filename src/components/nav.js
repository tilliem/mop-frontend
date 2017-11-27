import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Nav extends React.Component {
  render(){

    const { user } = this.props

    const userLinks = (
      <div className="pull-right bump-top-1 span-7 top-menu">
        <ul className="nav collapse nav-collapse">
          <li><a className="lh-14 navlink" href="http://petitions.moveon.org/admin">Admin</a></li>
          <li><a className="lh-14 navlink" href="http://petitions.moveon.org/campaign_tips.html">Campaign Tips</a></li>
          <li><a className="lh-14 navlink" href="/edit_account.html">Edit account</a></li>
          <li><a className="lh-14 navlink" href="/login/do_logout.html?redirect=/index.html">Logout</a></li>
          <li><a className="lh-14 navlink" href="https://civic.moveon.org/donatec4/creditcard.html?cpn_id=511">Donate</a></li>
        </ul>
      </div>
    )

    const guestLinks = (
      <div className="pull-right bump-top-1 span-7 top-menu">
        <ul className="nav collapse nav-collapse">
          <li><a className="lh-14 navlink" href="http://petitions.moveon.org/admin">Admin</a></li>
          <li><a className="lh-14 navlink" href="http://petitions.moveon.org/campaign_tips.html">Campaign Tips</a></li>
          <li><a className="lh-14 navlink" href="https://civic.moveon.org/donatec4/creditcard.html?cpn_id=511">Donate</a></li>
        </ul>
      </div>
    )


    return (
      <div>
        <div className="container" id="header">
          <div className="row">
            <div className="moveon-masthead pull-left hidden-phone">
              <a href="/">MoveOn.org</a>
            </div>

            <div className="mobile visible-phone">
              <div className="moveon-masthead pull-left">
                <a href="/">MoveOn.org</a>
              </div>
            </div>

            <div className="pull-left top-icons hidden-phone">
              <div className="pull-left span2 petitions-partner-logo bump-top-1 margin-right-2 hidden-phone"></div>
              <a className="icon-link-narrow icon-start" href="http://petitions.moveon.org/create_start.html?source=topnav">Start a petition</a>
              <a className="icon-link-narrow icon-managepetitions" href="http://petitions.moveon.org/dashboard.html?source=topnav">Dashboard</a>
            </div>

            <div className="pull-left top-icons visible-phone">
              <a className="icon-link-narrow icon-start" href="http://petitions.moveon.org/create_start.html?source=topnav-mobile"></a>
              <a className="icon-link-narrow icon-managepetitions" href="http://petitions.moveon.org/dashboard.html"></a>
            </div>

            <a className="btn visible-phone pull-right bump-top-2" data-toggle="collapse" data-target=".nav-collapse">
              <span className="icon-th-list"></span>
            </a>

            { user ? userLinks : guestLinks }

          </div>
        </div>
        <div className="container visible-phone">
          <div className="row pull-left">
            <div className="pull-left span2 petitions-partner-logo bump-top-1 margin-right-2">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Nav.propTypes = {
  user: PropTypes.object
}

function mapStateToProps(store, ownProps) {
  return {
    user: store.userStore
  }
}

export default connect(mapStateToProps)(Nav)
