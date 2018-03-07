[![Build Status](https://travis-ci.org/MoveOnOrg/mop-frontend.svg?branch=main)](https://travis-ci.org/MoveOnOrg/mop-frontend)

# MoveOn Petitions (MOP) Front-end

This is the interface for [petitions.moveon.org](https://petitions.moveon.org/), a React app. Some parts of the site are already running this code, while others are using a legacy system. Our goal is to eventually drive the interface for the entire site with this app, and retire the legacy system.

# Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

# Install

* Install NPM. Recommended versions: NPM v3.10.10, Node v6.9.3 LTS.
* $ `npm install`

# Compile JavaScript

* $ `npm run build` (do `npm run dev-build` to get source maps, though this increases filesize significantly)

# Lint JavaScript

* $ `npm run lint`

# Test JavaScript

* $ `npm test`

# Local development

The most simple local development is just `npm run dev` and then go to a page on http://localhost:8080/, e.g. http://localhost:8080/#/sign/outkast. For more complex options, see [How to Develop with a Server Backend](docs/HOWTO--server-backend.md) and [Environment Variables Reference](docs/REFERENCE--environment-variables.md).
