import React from 'react'
import { expect } from 'chai'

import { mount } from 'enzyme'

import Thanks from '../../src/containers/thanks'

import outkastPetition from '../../local/api/v1/petitions/outkast.json'

describe('<Thanks />', () => {
  it('renders thanks for petition', () => {
    const context = mount(<Thanks petition={outkastPetition} />)
    // console.log(context.html())
    expect(context.find('h1').text()).to.equal('Thanks!')
  })
})
