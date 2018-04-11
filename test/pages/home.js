import React from 'react'
import { Provider } from 'react-redux'
import { expect } from 'chai'

import { mount } from 'enzyme'
import { createMockStore } from 'redux-test-utils'

import { Home } from 'Theme/home'
import BillBoard from 'Theme/billboard'
import SearchBar from '../../src/containers/searchbar'
import Victories from '../../src/containers/victories'
import TopPetitions from '../../src/containers/top-petitions'


describe('<Home />', () => {
  const baseStore = createMockStore({ navStore: {}, petitionStore: {} })

  it('renders a billboard', () => {
    const myComponent = <Home params={{}} />
    const context = mount(<Provider store={baseStore} children={myComponent} />)
    expect(context.find(BillBoard)).to.have.length(1)
  })

  it('renders a searchbar', () => {
    const myComponent = <Home params={{}} />
    const context = mount(<Provider store={baseStore} children={myComponent} />)
    expect(context.find(SearchBar)).to.have.length(1)
  })

  it('renders a recent victory list', () => {
    const myComponent = <Home params={{}} />
    const context = mount(<Provider store={baseStore} children={myComponent} />)
    expect(context.find(Victories)).to.have.length(1)
  })

  it('renders top petitions', () => {
    const myComponent = <Home params={{}} />
    const context = mount(<Provider store={baseStore} children={myComponent} />)
    expect(context.find(TopPetitions)).to.have.length(1)
  })
})
