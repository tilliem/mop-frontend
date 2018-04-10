import React from 'react'
import PropTypes from 'prop-types'

import BillBoard from 'LegacyTheme/billboard'
import SearchBar from '../../containers/searchbar'
import Victories from '../../containers/victories'
import TopPetitions from '../../containers/top-petitions'

export const Home = ({ isPac }) => (
  <div className='moveon-petitions container background-moveon-white bump-top-1'>
    <BillBoard />
    <div>
      <SearchBar isLong />
      <div className='clear'></div>
    </div>

    <div className='row front-content'>
      <TopPetitions
        pac={isPac}
        source='petitionshomepage'
      />
      <Victories />
    </div>
  </div>
)

Home.propTypes = {
  orgName: PropTypes.string,
  orgData: PropTypes.object,
  isOrganization: PropTypes.bool,
  isPac: PropTypes.bool
}
