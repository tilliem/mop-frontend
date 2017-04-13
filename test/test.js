import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Nav from '../src/components/nav.js';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {actionTypes, loadPetition} from '../src/actions/petitionActions.js'
import nock from 'nock'
import samplePetition from '../local/api/v1/petitions/outkast.json';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)


describe('<Nav />', function() {
  it('contains logo', () => {
    const nav = shallow(<Nav />);
    expect(
      nav.find('.navbar-brand')
    ).to.have.length(1);
  });
  it('contains logo linking to petitions.moveon.org', () => {
    const nav = shallow(<Nav />);
    expect(
      nav.find('.navbar-brand').props().href
    ).to.include('petitions.moveon.org');
  });
  it('contains logo linking to petitions.moveon.org over HTTPS', () => {
    const nav = shallow(<Nav />);
    expect(
      nav.find('.navbar-brand').prop('href')
    ).to.equal('https://petitions.moveon.org/');
  });
  it('contains no insecure links to petitions.moveon.org', () => {
    const nav = shallow(<Nav />);
    expect(
      nav.find('a').someWhere(
        link => {
          return link.prop('href').startsWith('http://petitions.moveon.org')
        }
      )
    ).to.equal(false);
  });
});

describe('Petition loading', function() {
  it('creates FETCH_PETITION_SUCCESS when loading petition', () => {
    nock('http://example.com/')
      .get('/sign/outkast')
      .reply(200, samplePetition)

    const expectedActions = [
      { type: actionTypes.FETCH_PETITION_REQUEST, slug: 'outkast' },
      { type: actionTypes.FETCH_PETITION_SUCCESS,
        slug: 'outkast',
        petition: samplePetition }
    ]
    const store = mockStore()

    let res = store.dispatch(loadPetition('outkast'))
      res.then(() => { // return of async actions
    console.log(store.getActions())
        expect(store.getActions()).toEqual(expectedActions)
      })
  });
});
