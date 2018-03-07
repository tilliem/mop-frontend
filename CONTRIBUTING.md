# Contributing to mop-frontend

Welcome! Thanks for your interest in contributing to MoveOn Petitions, and supporting MoveOn and progressive partners and individuals who use this tool to advance their campaigns.

## Getting started

We recommend starting with an issue marked ["good first issue"](https://github.com/MoveOnOrg/mop-frontend/labels/good%20first%20issue).

## Contact us!

If you have any questions about an issue or the project in general, please ask either in the issue, or join the [Progressive Coders Network](http://progcode.org/) and chat with us in the #moveon channel.

## The backend

This React app makes extensive use of an API that is largely been built at the same time. You may see links to the backend "mop" repo, but it is not (yet!) open source so you won't be able to access it. If you're working on an issue that requires a change to the backend, just mention it in the mop-frontend issue.

## Code conventions

### React/Redux standard patterns

* `reducers/index.js` should represent (as a pure function) initial and all possible state changes

### Project-particular patterns

* assuming redux-thunk, no mapPropsToDispatch -- just call `dipatch(actions.foo(data))`
* `actions/*` is where you call out to get data (async or otherwise)
* Even though convention calls redux 'state' 'state', we call it 'store' to map better to the redux global store object, and distinguish it from component states. C.f. any component that has a `mapStateToProps` function
* Any links to petitions.moveon.org should use react-router's `<Link to= />` regardless of it being in or out of the React app. The `to` must be an absolute path and not relative (i.e. start with a `/`). In `src/routes.js`, when a route's app is 'production ready', we need to mark it with `prodReady` in the appropriate `<Route />`.
