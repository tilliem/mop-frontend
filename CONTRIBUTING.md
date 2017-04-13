=Code conventions

== React/Redux standard patterns
 * reducers/index.js should represent (as a pure function) initial and all possible state changes

== Project-particular patterns

 * assuming redux-thunk, no mapPropsToDispatch -- just call `dipatch(actions.foo(data))`
 * `actions/*` is where you call out to get data (async or otherwise)
 * lazy-loading info: (TODO)
 

