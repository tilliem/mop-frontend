import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore.js';
import {routes} from './routes.js';

// see reducers/index.js for initialState (and all possible transient states
const store = configureStore();

// NOTE: this requires the javascript to be loaded at the bottom of the page
// or at least after the id="root" element

ReactDOM.render(
    <Provider store={store} children={routes} />,
  document.getElementById('root')
);
