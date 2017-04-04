import React from 'react';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import SignPetition from './pages/sign-petition.js';
import Thanks from './pages/thanks.js';

let baseAppPath = process.env.BASE_APP_PATH || '/';
let historyRouting = (process.env.PROD ? browserHistory : hashHistory);

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <Router history={historyRouting}>
        <Route path={baseAppPath} >
          <Route path="sign/:petition_slug" component={SignPetition}/>
          <Route path="thanks.html" component={Thanks}/>
        </Route>
      </Router>
    );
  }

}

export default App;
