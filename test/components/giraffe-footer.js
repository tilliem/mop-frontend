import React from 'react'
import { expect } from 'chai'

import { mount, shallow } from 'enzyme'

import Footer from '../../src/components/theme-giraffe/footer'

import {
  Nav,
  Text,
  Social,
  FinePrint,
  MoFooter
} from 'GiraffeUI/footer'

describe('<Footer /> (Giraffe)', () => {
  it('renders <MoFooter />', () => {
    const footer = shallow(<Footer />)
    expect(footer.find('MoFooter').length).to.equal(1)
  })

  it('renders 3 nav.links sections', () => {
    const footer = mount(<Footer />)
    const top = footer.find(MoFooter.Top)
    const nav = top.find(Nav)
    expect(nav.find(Nav.Links).length).to.equal(3)
  })

  it('renders a call to action', () => {
    const footer = mount(<Footer />)
    const nav = footer.find(Nav)
    expect(nav.find(Nav.CallToAction).length).to.equal(1)
  })

  it('renders the footer <Text />', () => {
    const footer = mount(<Footer />)
    const top = footer.find(MoFooter.Top)
    expect(top.find(Text).length).to.equal(1)
  })

  it('renders the footer <Social />', () => {
    const footer = mount(<Footer />)
    const top = footer.find(MoFooter.Bottom)
    expect(top.find(Social).length).to.equal(1)
  })

  it('renders the footer <FinePrint />', () => {
    const footer = mount(<Footer />)
    const top = footer.find(MoFooter.Bottom)
    expect(top.find(FinePrint).length).to.equal(1)
  })
})

