import React from 'react'
import { expect } from 'chai'

import { shallow } from 'enzyme'
import { createMockStore } from 'redux-test-utils'

import SearchPage from '../../src/pages/search'


describe('<SearchPage />', () => {
  const baseStore = createMockStore({ userStore: {} })

  it('renders default values with no search query', () => {
    const searchPageProps = { query: {}, location: { search: '' } }
    const context = shallow(<SearchPage {...searchPageProps} store={baseStore} />)
    expect(context.props().query).to.equal('')
    expect(context.props().pageNumber).to.equal('1')
    expect(context.props().selectState).to.equal('')
  })

  it('parses out query', () => {
    const searchPageProps = { query: {}, location: { search: 'q=cats' } }
    const context = shallow(<SearchPage {...searchPageProps} store={baseStore} />)
    expect(context.props().query).to.equal('cats')
    expect(context.props().pageNumber).to.equal('1')
    expect(context.props().selectState).to.equal('')
  })

  it('parses out page number', () => {
    const searchPageProps = { query: {}, location: { search: 'q=cats&page=2' } }
    const context = shallow(<SearchPage {...searchPageProps} store={baseStore} />)
    expect(context.props().query).to.equal('cats')
    expect(context.props().pageNumber).to.equal('2')
    expect(context.props().selectState).to.equal('')
  })

  it('parses out selected state', () => {
    const searchPageProps = { query: {}, location: { search: 'q=cats&page=2&state=VA' } }
    const context = shallow(<SearchPage {...searchPageProps} store={baseStore} />)
    expect(context.props().query).to.equal('cats')
    expect(context.props().pageNumber).to.equal('2')
    expect(context.props().selectState).to.equal('VA')
  })
})
