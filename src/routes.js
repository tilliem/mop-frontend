import React from 'react'
import { IndexRoute, Route, Router, browserHistory, hashHistory } from 'react-router'

import { Config } from './config'
import { loadSession } from './actions/sessionActions'
import Home from './pages/home'
import SignPetition from './pages/sign-petition'
import ThanksPage from './pages/thanks'
import SearchPage from './pages/search'
import PetitionCreatorDashboard from './pages/petition-creator-dashboard'
import CreatePetitionPage from './pages/create-petition-page'
import PetitionReportPage from './pages/petition-report-page'
import Wrapper from './components/wrapper'

const baseAppPath = process.env.BASE_APP_PATH || '/'

export const appLocation = (Config.USE_HASH_BROWSING ? hashHistory : browserHistory)

export const routes = (store) => (
  <Router history={appLocation}>
    <Route path={baseAppPath} component={Wrapper} onEnter={(nextState) => { store.dispatch(loadSession(nextState)) }} >
      <IndexRoute component={Home} />
      <Route path='/sign/:petition_slug' component={SignPetition} />
      <Route path='/thanks.html' component={ThanksPage} />
      <Route path='/find' component={SearchPage} />
      <Route path='/dashboard.html' component={PetitionCreatorDashboard} />
      <Route path='/create_start.html' component={CreatePetitionPage} />
      <Route path='/petition_report.html' component={PetitionReportPage} />
    </Route>
  </Router>
)
