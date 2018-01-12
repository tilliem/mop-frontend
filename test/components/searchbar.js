import React from 'react'
import { expect } from 'chai'

import { mount } from 'enzyme'
import { unwrapReduxComponent } from '../lib'
import { createMockStore } from 'redux-test-utils'

import SearchBar from '../../src/components/searchbar'


describe('<SearchBar />', () => {
  const baseStore = createMockStore({ userStore: {} })


  it('basic loading, long searchbar', () => {
    const context = mount(<SearchBar store={baseStore} />)
    const component = unwrapReduxComponent(context)
    expect(context.find('#searchValue').length).to.equal(1)
    expect(component.props.query).to.equal(undefined)
    expect(component.props.size).to.equal(undefined)
    expect(component.props.selectState).to.equal(undefined)
    expect(context.find('#search-bar-large').length).to.equal(1)
  })

  it('prepopulates query if passed in', () => {
    const searchBarProps = { query: 'cats' }
    const context = mount(<SearchBar {...searchBarProps} store={baseStore} />)
    const component = unwrapReduxComponent(context)
    expect(component.props.query).to.equal('cats')
    expect(component.props.selectState).to.equal(undefined)
  })

  // TODO: did we intentionally not include state select when the search bar is long?
  it('prepopulates selectState if passed in ', () => {
    const searchBarProps = { selectState: 'VA' }
    const context = mount(<SearchBar {...searchBarProps} store={baseStore} />)
    const component = unwrapReduxComponent(context)
    expect(component.props.query).to.equal(undefined)
    expect(component.props.selectState).to.equal('VA')
  })
})
