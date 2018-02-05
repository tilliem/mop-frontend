import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Config } from '../config.js'
import BillBoard from '../components/legacy/billboard'
import SearchBar from './searchbar'
import RecentVictoryList from '../components/legacy/recentvictory.js'
import TopPetitions from './top-petitions'

const Home = ({ params, nav }) => {
  const { organization } = params
  const isOrganization = Boolean(organization && organization !== 'pac')
  const isPac = (organization === 'pac' || (!isOrganization && Config.ENTITY === 'pac'))
  const orgData = (nav && nav.orgs && nav.orgs[organization]) || {}
  return (
    <div className='moveon-petitions container background-moveon-white bump-top-1'>
      {isOrganization ? null : <BillBoard />}
      <div>
        <SearchBar isLong />
      </div>

      {isOrganization
       ? (
        <div className='organization-header'>
          <h2>{orgData.organization}</h2>
          {orgData.description || `${orgData.organization} is a MoveOn MegaPartner, an invite-only program that lets a partner organization&#39;s members and activists set up their own MoveOn petitions in partnership with the original organization.`}
          <p className='pull-right'><a href='create_start.html' className='button background-moveon-bright-red'>Create a petition</a></p>
        </div>
       ) : null
      }

      <div className='row front-content'>
        <TopPetitions
          pac={isPac ? 1 : 0}
          megapartner={organization || ''}
          fullWidth={isOrganization}
          source='homepage'
        />
        {isOrganization ? null : <RecentVictoryList />}
      </div>
    </div>
  )
}

Home.propTypes = {
  nav: PropTypes.object,
  params: PropTypes.object
}

function mapStateToProps(store) {
  return {
    nav: store.navStore
  }
}

export default connect(mapStateToProps)(Home)
