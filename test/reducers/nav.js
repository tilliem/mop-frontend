import { expect } from 'chai'
import reducer from '../../src/reducers/nav'

import { actionTypes as navActionTypes } from '../../src/actions/navActions.js'
import { actionTypes as petitionActionTypes } from '../../src/actions/petitionActions.js'

const { FETCH_PETITON_SUCCESS, FETCH_TOP_PETITIONS_SUCCESS } = petitionActionTypes
const { FETCH_ORG_SUCCESS } = navActionTypes

const defaultState = reducer(undefined, {})

describe('nav reducer', () => {
  it('default state', () => {
    expect(defaultState).to.deep.equal({
      orgs: {},
      partnerCobrand: null
    })
  })

  it('adds orgs to table when FETCH_ORG_SUCCESS', () => {
    const type = FETCH_ORG_SUCCESS
    const action = {
      type,
      slug: 'test',
      org: { test: true }
    }

    let state = reducer(defaultState, action)
    expect(state.orgs.test, 'orgs.test saved')
      .to.equal(action.org)

    state = reducer(state, { type, slug: 'test2', org: 'test2' })
    expect(state.orgs.test2, 'orgs.test2 saved')
      .to.equal('test2')
    expect(state.orgs.test, 'orgs.test unchanged')
      .to.equal(action.org)

    state = reducer(state, { type, slug: 'test', org: 'test' })
    expect(state.orgs.test, 'orgs.test overwritten')
      .to.equal('test')
    expect(state.orgs.test2, 'orgs.test2 unchanged')
      .to.equal('test2')
  })

  const brandOnly = { logo_image_url: 'yes.jpg', organization: 'Move On', browser_url: 'http://' }
  const brandWithFluff = { ...brandOnly, fluff: true }
  const wrongBrand = { ...brandWithFluff, organization: 'not me' }

  function testPetitionVariants(name, actionCreator) {
    describe(name, () => {
      it('sets cobrand using sponsor', () => {
        const state = reducer(defaultState, actionCreator({ _embedded: { sponsor: brandWithFluff } }))
        expect(state.partnerCobrand).to.deep.equal(brandOnly)
      })

      it('sets cobrand using creator', () => {
        const state = reducer(defaultState, actionCreator({ _embedded: { creator: brandWithFluff } }))
        expect(state.partnerCobrand).to.deep.equal(brandOnly)
      })

      it('sets cobrand using sponsor when both sponsor and creator', () => {
        const state = reducer(defaultState, actionCreator({ _embedded: { sponsor: brandWithFluff, creator: wrongBrand } }))
        expect(state.partnerCobrand).to.deep.equal(brandOnly)
      })

      it('sets to null after a new action without sponsor or creator', () => {
        const filledState = reducer(defaultState, actionCreator({ _embedded: { creator: brandWithFluff } }))

        const state = reducer(filledState, actionCreator({}))
        expect(state.partnerCobrand).to.deep.equal(null)
      })
    })
  }

  testPetitionVariants('FETCH_PETITION_SUCCESS', petition => ({
    type: FETCH_PETITON_SUCCESS,
    petition
  }))

  testPetitionVariants('FETCH_TOP_PETITIONS_SUCCESS', petition => ({
    type: FETCH_TOP_PETITIONS_SUCCESS,
    petitions: [petition]
  }))
})
