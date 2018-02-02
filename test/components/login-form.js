import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'

import { mount, shallow } from 'enzyme'

import LoginForm from '../../src/components/login-form'

describe('<LoginForm />', () => {
  it('displays fields', () => {
    const login = shallow(<LoginForm />)
    expect(login.find('input[name="email"]').length).to.equal(1)
    expect(login.find('input[name="password"]').length).to.equal(1)
  })

  it('passed errors are displayed', () => {
    const errors = [{ message: 'There was a login error' }]
    const login = shallow(<LoginForm errors={errors} />)
    expect(login.find('.errors').text()).to.equal('There was a login error')
  })

  it('displays errors when required fields are missing', () => {
    const login = mount(<LoginForm />)
    login.find('form').simulate('submit')
    expect(login.find('.errors').find('li').length).to.equal(2)
  })

  it('validates email', () => {
    const login = mount(<LoginForm />)
    login.find('input[name="email"]').node.value = 'foo'
    login.find('input[name="password"]').node.value = 'bar'
    login.find('form').simulate('submit')
    expect(login.find('.errors').text()).to.equal(
      'Invalid entry for the Email field.'
    )
  })

  it.only('submitting valid data calls submit function', () => {
    const spy = sinon.spy()
    const login = mount(<LoginForm onSubmit={spy} />)
    login.find('input[name="email"]').node.value = 'foo@example.com'
    login.find('input[name="password"]').node.value = 'bar'
    login.find('form').simulate('submit')
    expect(spy.calledOnce).to.be.true
    expect(spy.calledWith({ email: 'foo@example.com', password: 'bar' })).to.be.true
  })
})
