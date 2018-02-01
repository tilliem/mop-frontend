import React from 'react'
import { IndexRoute, Route, Router, browserHistory, hashHistory } from 'react-router'


import { Config } from './config'
import { loadSession } from './actions/sessionActions'
import { loadOrganization } from './actions/navActions.js'
import Home from './pages/home'
import SignPetition from './pages/sign-petition'
import ThanksPage from './pages/thanks'
import SearchPage from './pages/search'
import PetitionCreatorDashboard from './pages/petition-creator-dashboard'
import CreatePetitionPage from './pages/create-petition-page'
import PetitionReportPage from './pages/petition-report-page'
import Wrapper from './components/wrapper'
import Register from './pages/register'
import Login from './pages/login'


const baseAppPath = process.env.BASE_APP_PATH || '/'

export const appLocation = (Config.USE_HASH_BROWSING ? hashHistory : browserHistory)

export const routes = (store) => {
  const orgLoader = (nextState) => {
    if (nextState.params && nextState.params.organization) {
      store.dispatch(loadOrganization(nextState.params.organization))
    }
  }
  return (
    <Router history={appLocation}>
      <Route path={baseAppPath} component={Wrapper} onEnter={(nextState) => { store.dispatch(loadSession(nextState)) }} >
        <IndexRoute component={Home} />
        <Route path='/sign/:petition_slug' component={SignPetition} />
        <Route path='/:organization/sign/:petition_slug' component={SignPetition} onEnter={orgLoader} />
        <Route path='/thanks.html' component={ThanksPage} />
        <Route path='/:organization/thanks.html' component={ThanksPage} onEnter={orgLoader} />
        <Route path='/find' component={SearchPage} />
        <Route path='/dashboard.html' component={PetitionCreatorDashboard} />
        <Route path='/create_start.html' component={CreatePetitionPage} />
        <Route path='/petition_report.html' component={PetitionReportPage} />
        <Route path='/:organization/create_start.html' component={CreatePetitionPage} onEnter={orgLoader} />
        <Route path='/:organization/' component={Home} onEnter={orgLoader} />
        <Route path='/login/register.html' component={Register} />
        <Route path='/login/index.html' component={Login} />
      </Route>
    </Router>
  )
}
