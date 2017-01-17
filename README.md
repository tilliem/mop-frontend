# MoveOn Petitions (MOP) Front-end

This is the browser-based, JavaScript implementation of the MoveOn Petitions platform. This uses React, Babel, and Webpack.

# Install

* Install NPM. Recommended versions: NPM v3.10.10, Node v6.9.3 LTS.
* $ `npm install`

# Compile JavaScript

* $ `./node_modules/.bin/webpack -d`

# Lint JavaScript

* $ `./node_modules/.bin/eslint src/*`

# Standalone dev env (certain to change)

Your react app needs a containing html file of some sort to start up the react JS app. Until we formalize this more, you can use these steps:

make a local folder with some HTML file:

``` cd [YOUR_MOP-FRONTEND]; mkdir -p local/sign; touch local/sign/economic-disparity-campaign```

and then in that new html file, which in our example is "economic-disparity-campaign", put this template content:

```
<!DOCTYPE html>
<html>
  <head>
    <title>MoveOn Petitions - Economic Disparity &amp; Campaign Contributions</title>
    <link rel='stylesheet' href="https://s3.amazonaws.com/mop-static/css/moui.css" type='text/css' media='all' />
    <link href="../../css/petition.css" rel="stylesheet">


    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@moveon">
    <meta name="twitter:title" content="Economic Disparity &amp; Campaign Contributions">
    <meta name="twitter:description" content="I just signed a petition to : Reverse the Supreme Court&#39;s &quot;Citizens United&quot; decision by way of amendment and  demand a legislative review of the serious and ever increasing economic disparity between the wealthy and the poor in America.  This review would include an investigation into subsidies and tax breaks which mostly benefit the wealthy and proposals to eliminate these subsidies and tax breaks, thereby creating resources to increase funding for education and opportunities to help the poor and middle class.">
    <meta name="twitter:creator" content="@moveon">
    <meta name="twitter:image:src" content="http://static.petitions.moveon.org/images/moveon-petitions-logo-square.png">
    <meta name="twitter:domain" content="petitions.moveon.org">

    <meta property="og:title" content="Sign the petition: Economic Disparity &amp; Campaign Contributions" />
    <meta property="og:site_name" content="MoveOn Petitions" />
    <meta property="og:type" content="cause" />


  </head>
  <body class="moveon-petitions sign petition-84176">



    <div id="root"></div>
    <script src="https://unpkg.com/react@15.4.1/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@15.4.1/dist/react-dom.js"></script>
    <script src="../../js/main.js"></script>




  </body>
</html>

```

Then set your BASE_APP_PATH with the directory you created the HTML file in:

``` export BASE_APP_PATH="[YOUR_MOP-FRONTEND]/local/" ```

Then point to your local server for APIs:

``` export API_URI="http://0.0.0.0:8000" ```

then recompile your JS with:

$ `./node_modules/.bin/webpack -d`

then load up that html file in your browser, by pasting a link like this: file:///[YOUR_MOP-FRONTEND-PATH]/local/sign/economic-disparity-campaign

