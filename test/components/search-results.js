import React from 'react'
import { Provider } from 'react-redux'
import { expect } from 'chai'

import { mount } from 'enzyme'
import { createMockStore } from 'redux-test-utils'

import SearchResults from '../../src/components/search-results'


describe('<SearchResults />', () => {
  it('can render no results', () => {
    const props = { pageNumber: '1', query: '', pageSize: 0 }
    const myComponent = <SearchResults {...props} params={{}} />
    const baseStore = createMockStore({ userStore: {}, petitionSearchStore: { searchResults: { _embed: [], _links: {}, count: '0', page_size: 0 } } })
    const context = mount(<Provider store={baseStore} children={myComponent} />)
    expect(context.find('#search-results').length).to.equal(1)
    expect(context.find('.result').length).to.equal(0)

  })

  it('can render a page of results', () => {
    const embed = [{ name: 'a' }, { name: 'a' }, { name: 'a' }, { name: 'a' }, { name: 'a' }]
    const links = { next: '', url: '' }
    const baseStore = createMockStore({ userStore: {}, petitionSearchStore: { searchResults: { _embed: embed, _links: links, count: '10', page_size: 5 } } })
    const props = { pageNumber: '1', query: '', pageSize: 5 }
    const myComponent = <SearchResults {...props} params={{}} />
    const context = mount(<Provider store={baseStore} children={myComponent} />)
    expect(context.find('#search-results').length).to.equal(1)
    expect(context.find('.result').length).to.equal(5)
  })
})
