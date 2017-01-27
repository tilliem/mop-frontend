import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Nav from '../src/components/nav.js';

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
