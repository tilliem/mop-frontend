import { expect } from 'chai'
import reducer from '../../src/reducers'

import { actionTypes as accountActionTypes } from '../../src/actions/accountActions.js'
import sampleUserPetions from '../../local/api/v1/user/petitions.json'
import sampleTopPetitions from '../../local/api/v1/top-petitions.json'
import samplePetition from '../../local/api/v1/petitions/outkast.json'
import { actionTypes as petitionActionTypes } from '../../src/actions/petitionActions.js'

const defaultState = reducer(undefined, {})

describe('petition reducer', () => {
  it('adds users petitions to state when FETCH_USER_PETITIONS_SUCCESS', () => {
    const action = {
      type: accountActionTypes.FETCH_USER_PETITIONS_SUCCESS,
      petitions: sampleUserPetions._embedded
    }

    const state = reducer(defaultState, action)
    expect(Object.keys(state.petitionStore.petitions)).to.deep.equal(['95983', 'outkast'])
  })

  it('adds top petitions to state when FETCH_TOP_PETITIONS_SUCCESS', () => {
    const action = {
      type: petitionActionTypes.FETCH_TOP_PETITIONS_SUCCESS,
      petitions: sampleTopPetitions._embedded,
      topPetitionsKey: 'test1'
    }

    const state = reducer(defaultState, action)

    expect(state.petitionStore.topPetitions)
      .to.have.property('test1')
      .to.deep.equal([95983])
    expect(Object.keys(state.petitionStore.petitions)).to.deep.equal(['95983', 'outkast'])
  })

  it('adds signature to petitions state when PETITION_SIGNATURE_SUCCESS', () => {
    const action = {
      type: petitionActionTypes.PETITION_SIGNATURE_SUCCESS,
      signatureStatus: 'success',
      petition: samplePetition
    }

    const state = reducer(defaultState, action)

    expect(state.petitionStore.signatureStatus)
      .to.have.property('95983')
      .to.deep.equal('success')
  })
})
