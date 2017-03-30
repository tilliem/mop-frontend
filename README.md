# MoveOn Petitions (MOP) Front-end

This is the browser-based, JavaScript implementation of the MoveOn Petitions platform. This uses React, Babel, and Webpack.

# Install

* Install NPM. Recommended versions: NPM v3.10.10, Node v6.9.3 LTS.
* $ `npm install`

# Compile JavaScript

* $ `./node_modules/.bin/webpack -d`

# Lint JavaScript

* $ `./node_modules/.bin/eslint src/*`

# Test JavaScript

* $ `npm test`

# Local development environment

When running locally, you should set the following environment variables:

```
export API_URI="https://petitions.example.com"
export BASE_APP_PATH="/Users/yourusername/Sites/mop-frontend/local/"
export STATIC_ROOT="../../js/"
```

`API_URI` can either point at a hosted version of the API (as in the example), or a local instance of mop (something like `http://0.0.0.0:8000`).

`BASE_APP_PATH` is everything that comes after `file://` in your browser's local file URL, up to and including `/local/`.

`STATIC_ROOT` is the path from the HTML file you're testing to the compiled JavaScript. e.g. for `/local/thanks.html`, the relative path is `../js/`, but for `/local/sign/economic-disparity-campaign`, the relative path is one more step away, `../../js/`
