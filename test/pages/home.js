import React from 'react'
import { expect } from 'chai'

import { shallow } from 'enzyme'

import Home from '../../src/pages/home'
import BillBoard from '../../src/components/billboard'
import SearchBar from '../../src/components/searchbar'
import RecentVictoryList from '../../src/components/recentvictory.js'

describe('<Home />', () => {
  it('renders a billboard', () => {
    const context = shallow(<Home />)
    expect(context.find(BillBoard)).to.have.length(1)
  })

  it('renders a searchbar', () => {
    const context = shallow(<Home />)
    expect(context.find(SearchBar)).to.have.length(1)
  })

  it('renders a recent victory list inside .front-content', () => {
    const context = shallow(<Home />)
    expect(context.find('.front-content').find(RecentVictoryList)).to.have.length(1)
  })
})
