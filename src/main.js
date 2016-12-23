import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

// NOTE: this requires the javascript to be loaded at the bottom of the page
// or at least after the id="root" element

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
