import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Config } from '../config.js'
import BillBoard from 'LegacyTheme/billboard.js'
import SearchBar from './searchbar'
import RecentVictoryList from 'LegacyTheme/recentvictory'
import TopPetitions from './top-petitions'
import OrganizationHeader from 'LegacyTheme/organization-header'

const Home = ({ params, nav, isPac }) => {
  const { organization } = params
  const isOrganization = Boolean(organization && organization !== 'pac')
  const orgData = (nav && nav.orgs && nav.orgs[organization]) || {}
  return (
    <div className='moveon-petitions container background-moveon-white bump-top-1'>
      {isOrganization ? null : <BillBoard />}
      <div>
        <SearchBar isLong />
      </div>

      {isOrganization ? <OrganizationHeader orgData={orgData} /> : null}

      <div className='row front-content'>
        <TopPetitions
          pac={(isPac || (!isOrganization && Config.ENTITY === 'pac')) ? 1 : 0}
          megapartner={organization || ''}
          fullWidth={isOrganization}
          source='petitionshomepage'
        />
        {isOrganization ? null : <RecentVictoryList />}
      </div>
    </div>
  )
}

Home.propTypes = {
  nav: PropTypes.object,
  params: PropTypes.object,
  isPac: PropTypes.bool
}

function mapStateToProps(store) {
  return {
    nav: store.navStore
  }
}

export default connect(mapStateToProps)(Home)
