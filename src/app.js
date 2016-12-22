import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import SignPetition from './pages/sign-petition.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={SignPetition}/>
      </Router>
    );
  }

}

export default App;
