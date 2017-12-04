import React from 'react'

import BillBoard from '../components/billboard'
import SearchBar from '../components/searchbar'
import RecentVictoryList from '../components/recentvictory.js'

const Home = () => (
  <div className='container background-moveon-white bump-top-1'>
    <BillBoard />
    <SearchBar />
    <div className='row front-content'>
      <RecentVictoryList />
    </div>
  </div>
)

export default Home
