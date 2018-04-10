import React from 'react'
import { IndexRoute, Route, Router, browserHistory, hashHistory, match } from 'react-router'


import { Config } from './config'
import { trackPage } from './actions/sessionActions'
import { loadOrganization } from './actions/navActions.js'
import { Home } from 'Theme/home'
import PacHome from './containers/pac-home'
import SignPetition from './containers/sign-petition'
import ThanksShim from './loaders/thanks-shim'
import SearchPage from './containers/search'
import PetitionCreatorDashboard from './containers/petition-creator-dashboard'
import PetitionReport from './containers/petition-report'
import CreatePetitionPage from './containers/create-petition'
import Wrapper from './containers/wrapper'
import ForgotPassword from './containers/forgot-password'
import Register from './containers/register'
import Login from './containers/login'
import Static from './containers/static'


const baseAppPath = window.baseAppPath || process.env.BASE_APP_PATH || '/'

export const appLocation = (Config.USE_HASH_BROWSING ? hashHistory : browserHistory)

const updateHistoryObject = (historyObj, routes) => {
  // This overrides <Link> routes and router.push() calls to navigate away from the
  // react app to PROD_URL/path (not respecting baseAppPath)
  //  - if we haven't implemented that view yet
  //  - or, if we're in production, limits matches to <Route> objects marked with a
  //    prodReady property (={true})
  //
  // It also rewrites match locations to include baseAppPath (like /2018/)
  //
  // All <Link>s and appLocation.push calls in the codebase should NOT be relative
  // -- i.e. they should be absolute paths like /thanks.html

  const PROD_URL = 'https://petitions.moveon.org'
  const origPush = historyObj.push
  // eslint-disable-next-line no-param-reassign
  historyObj.push = (path, state) => {
    let matchPath = path
    if (baseAppPath !== '/' && path.substring(0, 4) !== 'http') {
      matchPath = baseAppPath + (path[0] === '/' ? path.substring(1) : path)
    }
    match(
      { location: matchPath, routes },
      (error, newlocation, props) => {
        if (!error && props) {
          const matchedComponent = props.routes[props.routes.length - 1]
          if (matchedComponent.prodReady || (!Config.ONLY_PROD_ROUTES && Config.BASE_URL !== PROD_URL)) {
            origPush.call(this, matchPath, state)
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
    <Route path={baseAppPath} component={Wrapper}>
      <IndexRoute prodReady component={Home} />
      <Route path='pac/' component={PacHome} />
      <Route path='sign/:petition_slug' component={SignPetition} />
      <Route path=':organization/sign/:petition_slug' component={SignPetition} onEnter={orgLoader} />
      <Route path='thanks.html' component={ThanksShim} prodReady minimalNav />
      <Route path=':organization/thanks.html' component={ThanksShim} onEnter={orgLoader} minimalNav />
      <Route path='find' component={SearchPage} />
      <Route path='dashboard.html' component={PetitionCreatorDashboard} />
      <Route path='create_start.html' component={CreatePetitionPage} minimalNav />
      <Route path='petition_report.html' component={PetitionReport} />
      <Route path=':organization/create_start.html' component={CreatePetitionPage} onEnter={orgLoader} minimalNav />
      <Route path='login/' component={Login} />
      <Route path='login/index.html' component={Login} />
      <Route path='login/register.html' component={Register} />
      <Route path='login/forgot_password.html' component={ForgotPassword} />

      {/* Static pages with content from wordpress api */}
      <Route path='about.html' component={Static} wordpressId={60931} />
      <Route path='brandmerge.html' component={Static} wordpressId={61002} />
      <Route path='campaign_tips.html' component={Static} wordpressId={60942} />
      <Route path='funding.html' component={Static} wordpressId={60943} />
      <Route path='howto_campaign.html' component={Static} wordpressId={60944} />
      <Route path='howto_communication.html' component={Static} wordpressId={60945} />
      <Route path='howto_delivery.html' component={Static} wordpressId={60946} />
      <Route path='howto_petition.html' component={Static} wordpressId={60947} />
      <Route path='howto_twitter.html' component={Static} wordpressId={60948} />
      <Route path='organizations.html' component={Static} wordpressId={60949} />
      <Route path='privacy.html' component={Static} wordpressId={60950} />
      <Route path='terms.html' component={Static} wordpressId={60951} />
      <Route path='victories.html' component={Static} wordpressId={61001} />
    </Route>
  )
  updateHistoryObject(appLocation, routeHierarchy)
  return (
    <Router history={appLocation}>
      {routeHierarchy}
    </Router>
  )
}
