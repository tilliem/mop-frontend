import React from 'react'
import { Router, Route, browserHistory, hashHistory } from 'react-router'

import { Config } from './config.js'
import { loadSession } from './actions/sessionActions.js'
import SignPetition from './pages/sign-petition.js'
import ThanksPage from './pages/thanks.js'
import Wrapper from './components/wrapper.js'

const baseAppPath = process.env.BASE_APP_PATH || '/'

export const appLocation = (Config.USE_HASH_BROWSING ? hashHistory : browserHistory)

export const routes = (store) => (
  <Router history={appLocation}>
    <Route path={baseAppPath} component={Wrapper}>
      <Route path='/sign/:petition_slug' component={SignPetition} onEnter={(props) => { store.dispatch(loadSession(props)) }} />
      <Route path='/thanks.html' component={ThanksPage} />
    </Route>
  </Router>
)
