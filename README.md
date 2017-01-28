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

Local development requires both the JavaScript and HTML pages loading that JavaScript. The relevant HTML is rendered by Django in the https://github.com/MoveOnOrg/mop project (mop). There are two ways to combine mop's HTML with mop-frontend's JavaScript:

## 1. Copy the HTML from mop to mop-frontend

The static HTML files in /local/ are copied from mop and edited with local paths. They can be loaded directly in a browser, but you'll need to configure webpack to compile the JS with local file paths, by setting environment variables to something like this:

```
export API_URI="https://testpet2.moveon.org"
export BASE_APP_PATH="/Users/yourusername/Sites/mop-frontend/local/"
export STATIC_ROOT="../../js/"
```

`API_URI` can either point at a hosted version of the API (as in the example), or a local instance of mop (something like `http://0.0.0.0:8000`).

`BASE_APP_PATH` is everything that comes after `file://` in your browser's local file URL, up to and including `/local/`.

`STATIC_ROOT` is the path from the HTML file you're testing to the compiled JavaScript. e.g. for `/local/thanks.html`, the relative path is `../js/`, but for `/local/sign/economic-disparity-campaign`, the relative path is one more step away, `../../js/`

## 2. Copy the JS from mop-frontend to mop

To use live HTML from a local mop install, you can also copy your compiled mop-frontend JS into Django to serve as static files.
