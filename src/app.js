import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import SignPetition from './pages/sign-petition.js';

let base_app_path = process.env.BASE_APP_PATH || "/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path={base_app_path} >
          <Route path="sign/:petition_slug" component={SignPetition}/>
        </Route>
      </Router>
    );
  }

}

export default App;
