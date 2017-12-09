import React from 'react';
import { expect } from 'chai';

import outkastPetition from '../../local/api/v1/petitions/outkast.json'
import outkastPetition2 from '../../local/api/v1/petitions/outkast-opposite.json'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { createMockStore } from 'redux-test-utils';

import { shallow, mount } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';
import { unwrapReduxComponent } from '../lib';

import SignatureAddForm from '../../src/components/signature-add-form';

describe('<SignatureAddForm />', () => {
  const propsProfileBase = { petition: outkastPetition, query: {} }
  const propsProfileOpposite = { petition: outkastPetition2, query: {} }
  const propsProfileBaseQueries = { petition: outkastPetition,
                                    query: { source: 'c.123', mailing_id: '123'} }
  const propsProfileOppositeQueries = { petition: outkastPetition2,
                                        query: { source: 'c.123', mailing_id: '123'} }
  const propsProfileOppositeQueries2 = { petition: outkastPetition2,
                                         query: { source: 'c.123' } }
  const storeAnonymous = { userStore: { anonymous: true }}
  const storeAkid = { userStore: { signonId: 123456,
                                   token: 'akid:fake.123456.bad123',
                                   given_name: 'Three Stacks'}}
  const storeAkidHasAddress = { userStore: { signonId: 123456,
                                             token: 'akid:fake.123456.bad123',
                                             given_name: 'Three Stacks',
                                             postal_addresses: [{status: 'Potential'}]}}

  describe('<SignatureAddForm /> static tests', () => {
    it('basic loading', () => {
      const store = createMockStore(storeAnonymous)
      const context = mount(<SignatureAddForm {...propsProfileBase} store={store}/>)
      const component = unwrapReduxComponent(context)
      expect(component.props.user.anonymous).to.be.equal(true)
      expect(context.find('#sign-here').text().match(/Sign this petition/)[0]).to.equal('Sign this petition');
    });

    it('anonymous fields displaying', () => {
      const store = createMockStore(storeAnonymous)
      const context = mount(<SignatureAddForm {...propsProfileBase} store={store}/>)
      const component = unwrapReduxComponent(context)
      expect(component.props.user.anonymous).to.be.equal(true)
      expect(context.find('input[name="name"]').length).to.equal(1);
      expect(context.find('input[name="email"]').length).to.equal(1);
      expect(context.find('input[name="address1"]').length).to.equal(1);
      expect(context.find('input[name="address2"]').length).to.equal(1);
      expect(context.find('input[name="city"]').length).to.equal(1);
      // not testing state because state is a sub component
      // expect(context.find('input[name="state"]').length).to.equal(1);
      expect(context.find('input[name="zip"]').length).to.equal(1);
    });

    it('petition with user fields displaying', () => {
      // Note: needs to test when it *appears* not when it's required
      const store = createMockStore(storeAkid)
      const context = mount(<SignatureAddForm {...propsProfileOpposite} store={store}/>)
      const component = unwrapReduxComponent(context)
      expect(Boolean(component.props.user.anonymous)).to.be.equal(false)
      expect(context.find('input[name="name"]').length).to.equal(0);
      expect(context.find('input[name="email"]').length).to.equal(0);
      expect(context.find('input[name="address1"]').length).to.equal(1);
      expect(context.find('input[name="address2"]').length).to.equal(1);
      expect(context.find('input[name="city"]').length).to.equal(1);
      // not testing state because state is a sub component
      // expect(context.find('input[name="state"]').length).to.equal(1);
      expect(context.find('input[name="zip"]').length).to.equal(1);
    });

    it('local petition with user fields displaying', () => {
      const store = createMockStore(storeAkid)
      const context = mount(<SignatureAddForm {...propsProfileBase} store={store}/>)
      const component = unwrapReduxComponent(context)
      expect(Boolean(component.props.user.anonymous)).to.be.equal(false)
      expect(context.find('input[name="name"]').length).to.equal(0);
      expect(context.find('input[name="email"]').length).to.equal(0);
      expect(context.find('input[name="address1"]').length).to.equal(1);
      expect(context.find('input[name="address2"]').length).to.equal(1);
      expect(context.find('input[name="city"]').length).to.equal(1);
      // not testing state because state is a sub component
      // expect(context.find('input[name="state"]').length).to.equal(1);
      expect(context.find('input[name="zip"]').length).to.equal(1);
    });

    //it('TODO:local petition without address when user has address', () => {});

    //it('TODO:show optin warning', () => {});

    //it('TODO:showing optin checkbox', () => {});

    //it('TODO: hidden optin', () => {});

    //it('TODO:non-US address', () => {});

  })
  describe('<SignatureAddForm /> stateful tests', () => {
    // it('TODO:non-US address', () => {})
    // it('TODO:logout/unrecognize shows anonymous field list', () => {})

    it('checking volunteer requires phone', () => {
      const store = createMockStore(storeAnonymous)
      const context = mount(<SignatureAddForm {...propsProfileBase} store={store}/>)
      const component = unwrapReduxComponent(context)
      const reqFieldsBefore = component.updateRequiredFields(true)
      expect(typeof reqFieldsBefore.phone).to.be.equal('undefined')
      component.volunteer({target:{checked: true}})
      expect(component.state.volunteer).to.be.equal(true)
      const reqFieldsAfter = component.updateRequiredFields(true)
      expect(typeof reqFieldsAfter.phone).to.be.equal('string')

      component.setState({address1:'123 main', city:'Pittsburgh', state:'PA', name:'John Smith', email:'hi@example.com', zip:'60024'})
      expect(component.formIsValid()).to.be.equal(false)
      component.setState({phone: '123-123-1234'})
      expect(component.formIsValid()).to.be.equal(true)
    })
    // it('TODO:typing incomplete fields submit fails and displays validation error messages', () => {})
    it('TODO:submitting petition gives good data', () => {
      const store = createMockStore(storeAnonymous)
      const context = mount(<SignatureAddForm {...propsProfileBase} store={store}/>)
      const component = unwrapReduxComponent(context)

      component.volunteer({target:{checked: true}})
      expect(component.state.volunteer).to.be.equal(true)
    })
  })
});
