var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'js');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/main.js',
  output: {
    path: BUILD_DIR,
    publicPath: process.env.STATIC_ROOT || "/static/",
    filename: ((process.env.PROD)
     ? 'main.min.js'
     : 'main.js'),
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  },
  plugins : [
    ((process.env.PROD)
     ? new webpack.optimize.UglifyJsPlugin()
     : new webpack.HotModuleReplacementPlugin()),
  ]
};

module.exports = config;
