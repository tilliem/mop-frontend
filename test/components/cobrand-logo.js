import React from 'react'
import { Link } from 'react-router'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { createMockStore } from 'redux-test-utils'

import CobrandLogo from '../../src/containers/cobrand-logo'

function getParams({ embed, org }) {
  const petitionSlug = 'test'
  const orgSlug = 'test-org'
  const store = {}
  const params = {}
  if (embed) {
    store.petitionStore = {
      petitions: { [petitionSlug]: { _embedded: embed } }
    }

    params.petition_slug = petitionSlug
  }

  if (org) {
    store.navStore = {
      orgs: { [orgSlug]: org }
    }
    params.organization = orgSlug
  }

  return {
    params,
    store: createMockStore(store)
  }
}

describe('<CobrandLogo />', () => {
  const brandOnly = {
    organization_logo_image_url: 'yes.jpg',
    organization: 'Move On',
    browser_url: 'http://example.com'
  }
  const brandWithFluff = { ...brandOnly, fluff: true }
  const wrongBrand = { ...brandWithFluff, organization: 'not me' }

  it('sets cobrand using sponsor in loaded petition', () => {
    const context = mount(
      <CobrandLogo {...getParams({ embed: { sponsor: brandOnly } })} />
    )
    expect(context.find(Link).prop('to')).to.equal('http://example.com')
    expect(context.find('img').html()).to.equal(
      '<img class="org_logo" src="yes.jpg" alt="Move On logo">'
    )
  })

  it('sets cobrand using creator in loaded petition', () => {
    const context = mount(
      <CobrandLogo {...getParams({ embed: { creator: brandOnly } })} />
    )
    expect(context.find(Link).prop('to')).to.equal('http://example.com')
    expect(context.find('img').html()).to.equal(
      '<img class="org_logo" src="yes.jpg" alt="Move On logo">'
    )
  })

  it('sets cobrand using sponsor when both sponsor and creator in loaded petition', () => {
    const context = mount(
      <CobrandLogo
        {...getParams({
          embed: { sponsor: brandWithFluff, creator: wrongBrand }
        })}
      />
    )
    expect(context.find(Link).prop('to')).to.equal('http://example.com')
    expect(context.find('img').html()).to.equal(
      '<img class="org_logo" src="yes.jpg" alt="Move On logo">'
    )
  })

  it('sets cobrand using an org url, overriding loaded petition', () => {
    const urlOrg = {
      logo_image_url: 'org.jpg',
      organization: 'Another org',
      browser_url: 'http://example2.com'
    }
    const context = mount(
      <CobrandLogo
        {...getParams({ embed: { creator: brandOnly }, org: urlOrg })}
      />
    )
    expect(context.find(Link).prop('to')).to.equal('http://example2.com')
    expect(context.find('img').html()).to.equal(
      '<img class="org_logo" src="org.jpg" alt="Another org logo">'
    )
  })
})
