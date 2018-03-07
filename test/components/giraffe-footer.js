import React from 'react'
import { expect } from 'chai'

import { shallow } from 'enzyme'

import { Footer } from '../../src/components/theme-giraffe/footer'

import {
  Nav,
  Text,
  Social,
  PACFinePrint,
  MoFooter
} from 'GiraffeUI/footer'

describe('<Footer /> (Giraffe)', () => {
  it('renders <MoFooter />', () => {
    const footer = shallow(<Footer />)
    expect(footer.find('MoFooter').length).to.equal(1)
  })

  it('renders 3 nav.links sections', () => {
    const footer = shallow(<Footer />)
    const top = footer.find(MoFooter.Top)
    const nav = top.find(Nav)
    expect(nav.find(Nav.Links).length).to.equal(3)
  })

  it('renders a call to action', () => {
    const footer = shallow(<Footer />)
    const nav = footer.find(Nav)
    expect(nav.find(Nav.CallToAction).length).to.equal(1)
  })

  it('renders the footer <Text />', () => {
    const footer = shallow(<Footer />)
    const top = footer.find(MoFooter.Top)
    expect(top.find(Text).length).to.equal(1)
  })

  it('renders the footer <Social />', () => {
    const footer = shallow(<Footer />)
    const top = footer.find(MoFooter.Bottom)
    expect(top.find(Social).length).to.equal(1)
  })

  it('renders the footer <FinePrint /> if entity is pac', () => {
    const footer = shallow(<Footer entity='pac' />)
    const top = footer.find(MoFooter.Bottom)
    expect(top.find(PACFinePrint).length).to.equal(1)
  })

  it('doesnt render the footer <FinePrint /> if entity is c4', () => {
    const footer = shallow(<Footer entity='c4' />)
    const top = footer.find(MoFooter.Bottom)
    expect(top.find(PACFinePrint).length).to.equal(0)
  })
})
