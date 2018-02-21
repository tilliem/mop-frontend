import React from 'react'
import { expect } from 'chai'

import { shallow } from 'enzyme'

import Nav from '../../src/components/theme-giraffe/nav'

describe('<Nav /> (Giraffe)', () => {
  it('renders <Header />', () => {
    const nav = shallow(<Nav />)
    expect(nav.find('Header').length).to.equal(1)
  })
})
