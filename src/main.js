import React from 'react';
import ReactDOM from 'react-dom';
import Petition from './components/petition.js';

document.addEventListener("DOMContentLoaded", function() {

  ReactDOM.render(
    <Petition/>,
    document.getElementById('petition')
  );

});
