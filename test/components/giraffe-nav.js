import React from 'react'
import { expect } from 'chai'

import { shallow } from 'enzyme'

import Nav from '../../src/components/theme-giraffe/nav'

import { Primary, Secondary, MoNav } from 'GiraffeUI/nav'

const props = { openSections: [], toggleSection: () => {} }

describe('<Nav /> (Giraffe)', () => {
  it('renders <Header />', () => {
    const header = shallow(<Nav {...props} />)
    expect(header.find('Header').length).to.equal(1)
  })

  it('renders Sections in the Primary Nav', () => {
    const header = shallow(<Nav {...props} />)
    const nav = header.find(MoNav)
    const primary = nav.find(Primary)
    expect(primary.length).to.equal(1)
    const sections = primary.find(Primary.Section)
    expect(sections.length).to.equal(2)
  })

  it('renders Top and Bottom within Secondary', () => {
    const header = shallow(<Nav {...props} />)
    const nav = header.find(MoNav)
    const sec = nav.find(Secondary)
    expect(sec.length).to.equal(1)
    expect(sec.find(Secondary.Top).length).to.equal(1)
    expect(sec.find(Secondary.Bottom).length).to.equal(1)
  })
})
