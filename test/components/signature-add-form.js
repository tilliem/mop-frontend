import React from 'react';
import { expect } from 'chai';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { createMockStore } from 'redux-test-utils';

import { shallow } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';

import SignatureAddForm from '../../src/components/signature-add-form';

describe('<SignatureAddForm />', () => {
	it('renders nothing if current is undefined', () => {
          const expectedState = {userStore: {'signonId': 123}}
          const props = {
            'petition': {
              '_embedded': {
                'creator': 'hi'
              }
            },
            'query': {}
          }
	  const context = shallowWithStore(<SignatureAddForm {...props} />, createMockStore(expectedState))
	  expect(context.props().user.signonId).to.be.equal(123)
	});
        /*
	it('formats numbers', () => {
		const context = shallow(<SignatureCount current={1000} goal={1000000}/>);
		expect(context.find('.progress-current strong').text()).to.equal('1,000');
		expect(context.find('.progress-goal strong').text()).to.equal('1,000,000');
	});
        */
});
