import React from 'react';
import { Provider } from 'react-redux'
import { expect } from 'chai';

import { mount } from 'enzyme';
import { createMockStore } from 'redux-test-utils';

import Home from '../../src/pages/home'
import BillBoard from '../../src/components/billboard'
import SearchBar from '../../src/components/searchbar'
import RecentVictoryList from '../../src/components/recentvictory.js'


describe('<Home />', () => {
  const baseStore = createMockStore({navStore: {}, petitionStore:{}})
  it('renders a billboard', () => {
    const myComponent = <Home params={{}} />
    const context = mount(<Provider store={baseStore} children={myComponent} />)
    expect(context.find(BillBoard)).to.have.length(1);
  });

  it('renders a searchbar', () => {
    const myComponent = <Home params={{}} />
    const context = mount(<Provider store={baseStore} children={myComponent} />)
    expect(context.find(SearchBar)).to.have.length(1);
  });

  it('renders a recent victory list inside .front-content', () => {
    const myComponent = <Home params={{}} />
    const context = mount(<Provider store={baseStore} children={myComponent} />)
    expect(context.find('.front-content').find(RecentVictoryList)).to.have.length(1);
  });

});
