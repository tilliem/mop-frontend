import React from 'react'
import { IndexRoute, Route, Router, browserHistory, hashHistory, match } from 'react-router'


import { Config } from './config'
import { loadSession, trackPage } from './actions/sessionActions'
import { loadOrganization } from './actions/navActions.js'
import Home from './containers/home'
import SignPetition from './containers/sign-petition'
import ThanksShim from './loaders/thanks-shim'
import SearchPage from './containers/search'
import PetitionCreatorDashboard from './containers/petition-creator-dashboard'
import PetitionReport from './containers/petition-report'
import CreatePetitionPage from './containers/create-petition'
import Wrapper from 'LegacyTheme/wrapper'
import ForgotPassword from './containers/forgot-password'
import Register from './containers/register'
import Login from './containers/login'


const baseAppPath = process.env.BASE_APP_PATH || '/'

export const appLocation = (Config.USE_HASH_BROWSING ? hashHistory : browserHistory)

const updateHistoryObject = (historyObj, routes) => {
  // This overrides <Link> routes and router.push() calls if we haven't implemented
  // that view yet or if we're in production limits matches
  // to <Route> objects marked with a prodReady property (={true})
  // All <Link>s and appLocation.push calls in the codebase should NOT be relative
  // -- i.e. they should be absolute paths like /thanks.html

  const PROD_URL = 'https://petitions.moveon.org'
  const origPush = historyObj.push
  // eslint-disable-next-line no-param-reassign
  historyObj.push = (path, state) => {
    match(
      { location: path, routes },
      (error, newlocation, props) => {
        if (!error && props) {
          const matchedComponent = props.routes[props.routes.length - 1]
          if (matchedComponent.prodReady || (!Config.ONLY_PROD_ROUTES && Config.BASE_URL !== PROD_URL)) {
            origPush.call(this, path, state)
            return
          }
        }
        if (path.substring(0, 4) === 'http') {
          window.location = path
        } else {
          window.location = `${PROD_URL}${path}`
        }
      })
  }
  // This is for GA/Segment tracking:
  // Note: this only triggers on *changes* -- not the first load
  // The server script loading should take care of the first load
  // with the boilerplate stuff, which should also setup the tracking id, etc.
  historyObj.listen(trackPage)
}

export const routes = (store) => {
  const orgLoader = (nextState) => {
    if (nextState.params && nextState.params.organization) {
      store.dispatch(loadOrganization(nextState.params.organization))
    }
  }
  const routeHierarchy = (
    <Route path={baseAppPath} component={Wrapper} onEnter={(nextState) => { store.dispatch(loadSession(nextState)) }} >
      <IndexRoute component={Home} />
      <Route path='/sign/:petition_slug' component={SignPetition} />
      <Route path='/:organization/sign/:petition_slug' component={SignPetition} onEnter={orgLoader} />
      <Route path='/thanks.html' component={ThanksShim} prodReady={false} minimalNav />
      <Route path='/:organization/thanks.html' component={ThanksShim} onEnter={orgLoader} minimalNav />
      <Route path='/find' component={SearchPage} />
      <Route path='/dashboard.html' component={PetitionCreatorDashboard} />
      <Route path='/create_start.html' component={CreatePetitionPage} minimalNav />
      <Route path='/petition_report.html' component={PetitionReport} />
      <Route path='/:organization/create_start.html' component={CreatePetitionPage} onEnter={orgLoader} minimalNav />
      <Route path='/login/' component={Login} />
      <Route path='/login/index.html' component={Login} />
      <Route path='/login/register.html' component={Register} />
      <Route path='/login/forgot_password.html' component={ForgotPassword} />
      <Route path='/:organization/' component={Home} onEnter={orgLoader} />
    </Route>
  )
  updateHistoryObject(appLocation, routeHierarchy)
  return (
    <Router history={appLocation}>
      {routeHierarchy}
    </Router>
  )
}
