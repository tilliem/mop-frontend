## Running tests

You can run all tests with a simple `npm test` or `npm run test`

To run a single test file you can run e.g. `npm run test1 test/pages/home.js`

## Creating Tests

Create files in the appropriate directory.  For components and pages, there are a couple
of test patterns that are important to understand.  Mostly this centers around how the React
Component (whether it's in pages/ or components/) relates to Redux state.

There are three cases:

### No redux state in the component or children

This is the easiest and will let you create a component like it's documented in most places.

```
import { shallow } from 'enzyme';
import { expect } from 'chai';

...

it('does something .... ', () => {
  const context = shallow(<YourComponent />);
  expect(context.find('.some-class')).to.have.length(1)
});
```

A good example of this is `components/signature-count.js`

### A component with redux state, but no children have redux state

```
import { createMockStore } from 'redux-test-utils';
import { mount } from 'enzyme';
import { unwrapReduxComponent } from '../lib'; // ./tests/lib.js
...

it('something with redux state', () => {
  const store = createMockStore({ navStore: {}, userStore: {anonymous: true}, petitionStore: {}})
  const context = mount(<YourComponent yourComponentProp={'foo'} store={store}/>)
  const component = unwrapReduxComponent(context)
  // assuming you map userStore => props.user in mapStateToProps...
  expect(component.props.user.anonymous).to.be.equal(true)
  expect(context.find('#something').text().match(/Some text/)[0]).to.equal('Some text');
});
```

### A component with children that have redux state

Because Redux does some 'magic'-like stuff to propagate down the `store` property at the
top-level of the app.  In this case we need to establish the 'root Provider' component
which does that magic.

```
import { Provider } from 'react-redux'
import { mount } from 'enzyme';
import { createMockStore } from 'redux-test-utils';

...

it('something with children with redux state', () => {
  const store = createMockStore({ navStore: {}, userStore: {anonymous: true}, petitionStore: {}})
  const myComponent = <YourComponent prop1={'foo'} />
  const context = mount(<Provider store={store} children={myComponent} />)
  const myMountedComponent = context.find(YourComponent).get(0)

  expect(context.find(YourComponent)).to.have.length(1)
});

```