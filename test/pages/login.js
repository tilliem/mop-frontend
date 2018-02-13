import React from 'react'
import { Provider } from 'react-redux'
import { expect } from 'chai'

import { mount } from 'enzyme'
import { createMockStore } from 'redux-test-utils'

import Login from '../../src/pages/login'
import LoginForm from '../../src/components/login-form'


describe('<Login />', () => {
  const baseStore = createMockStore({ userStore: {} })
  it('renders the login form', () => {
    const myComponent = <Login params={{}} />
    const context = mount(<Provider store={baseStore} children={myComponent} />)
    expect(context.find(LoginForm)).to.have.length(1)
  })
})
