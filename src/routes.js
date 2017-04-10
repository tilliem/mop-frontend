import { Router, Route, browserHistory, hashHistory } from 'react-router';

import {Config} from './config.js';
import SignPetition from './pages/sign-petition.js';
import Thanks from './pages/thanks.js';

let baseAppPath = process.env.BASE_APP_PATH || '/';

export const appLocation = (Config.USE_HASH_BROWSING ? hashHistory : browserHistory);

export const routes = (
     <Router history={appLocation}>
      <Route path={baseAppPath} >
        <Route path="sign/:petition_slug" component={SignPetition}/>
        <Route path="thanks.html" component={Thanks}/>
      </Route>
    </Router>);
