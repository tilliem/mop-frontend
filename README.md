[![Build Status](https://travis-ci.org/MoveOnOrg/mop-frontend.svg?branch=master)](https://travis-ci.org/MoveOnOrg/mop-frontend)

# MoveOn Petitions (MOP) Front-end

This is the browser-based, JavaScript implementation of the MoveOn Petitions platform. This uses React, Babel, and Webpack.

# Install

* Install NPM. Recommended versions: NPM v3.10.10, Node v6.9.3 LTS.
* $ `npm install`

# Compile JavaScript

* $ `npm run build` (do `npm run dev-build` to get source maps, though this increases filesize significantly)

# Lint JavaScript

* $ `npm run lint`

# Test JavaScript

* $ `npm test`

# Local development environment

If you are just developing the client, then you should not have to set any variables.

Just run:

```bash
  npm run dev  
```

and hot-reloading will work, then go to http://localhost:8080/#/sign/outkast


## Developing with a Server Backend
When running locally, you should set the following environment variables:

```
export API_URI="https://petitions.example.com"
export BASE_APP_PATH="/Users/yourusername/Sites/mop-frontend/local/"
export STATIC_ROOT="../../build/"
```

`API_URI` can either point at a hosted version of the API (as in the example), or a local instance of mop (something like `http://0.0.0.0:8000`).

`BASE_APP_PATH` is everything that comes after `file://` in your browser's local file URL, up to and including `/local/`.

`STATIC_ROOT` is the path from the HTML file you're testing to the compiled JavaScript. e.g. for `/local/thanks.html`, the relative path is `../js/`, but for `/local/sign/economic-disparity-campaign`, the relative path is one more step away, `../../js/`
