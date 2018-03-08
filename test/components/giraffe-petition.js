import React from 'react'
import { expect } from 'chai'

import { shallow } from 'enzyme'

import Petition from '../../src/components/theme-giraffe/petition'

const props = {
  query: {},
  petition: { title: 'test', target: [] }
}

describe('<Petition /> (Giraffe)', () => {
  it('renders <PetitionMessage />', () => {
    const petition = shallow(<Petition {...props} />)
    expect(petition.find('PetitionMessage').length).to.equal(1)
  })

  it('renders <Card /> components', () => {
    const petition = shallow(<Petition {...props} />).children()
    const infocolumn = petition.find('InfoColumn')
    expect(infocolumn.length).to.equal(1)
    const card = infocolumn.find('Card')
    expect(card.length).to.equal(1)
    const description = card.find('Description')
    expect(description.length).to.equal(1)
  })

  it('renders <Details /> components', () => {
    const petition = shallow(<Petition {...props} />)
    const infocolumn = petition.find('InfoColumn')
    expect(infocolumn.length).to.equal(1)
    const details = infocolumn.find('Details')
    expect(details.length).to.equal(1)
    const narrative = details.find('Narrative')
    expect(narrative.length).to.equal(1)
    const comments = details.find('Comments')
    expect(comments.length).to.equal(1)
    const author = details.find('Author')
    expect(author.length).to.equal(1)
    const share = details.find('Share')
    expect(share.length).to.equal(1)
    const disclaimer = details.find('Disclaimer')
    expect(disclaimer.length).to.equal(1)
  })

  it('renders <SignatureAddForm />', () => {
    const petition = shallow(<Petition {...props} />)
    const signcolumn = petition.find('SignColumn')
    expect(signcolumn.length).to.equal(1)
    const signatures = signcolumn.find('Connect(SignatureAddForm)')
    expect(signatures.length).to.equal(1)
  })
})
