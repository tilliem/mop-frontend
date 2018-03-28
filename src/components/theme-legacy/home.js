import React from 'react'
import PropTypes from 'prop-types'

import BillBoard from 'LegacyTheme/billboard'
import SearchBar from '../../containers/searchbar'
import Victories from '../../containers/victories'
import TopPetitions from '../../containers/top-petitions'
import OrganizationHeader from 'LegacyTheme/organization-header'

export const Home = ({ isOrganization, orgName, orgData, isPac }) => (
  <div className='moveon-petitions container background-moveon-white bump-top-1'>
    {isOrganization ? null : <BillBoard />}
    <div>
      <SearchBar isLong />
      <div className='clear'></div>
    </div>

    {isOrganization ? <OrganizationHeader orgData={orgData} /> : null}

    <div className='row front-content'>
      <TopPetitions
        pac={isPac}
        megapartner={orgName || ''}
        fullWidth={isOrganization}
        source='petitionshomepage'
      />
      {isOrganization ? null : <Victories />}
    </div>
  </div>
)

Home.propTypes = {
  orgName: PropTypes.string,
  orgData: PropTypes.object,
  isOrganization: PropTypes.bool,
  isPac: PropTypes.bool
}
