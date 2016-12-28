var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'js');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/main.js',
  output: {
    path: BUILD_DIR,
    publicPath: process.env.STATIC_ROOT || "/static/",
    //NOTE: when process.env.PROD is true this will be the minified file
    //TODO: maybe we should hash this and figure out a way to pass the hashed version to it
    filename: 'main.js'
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
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(((process.env.PROD) ? 'production' : 'development')),
        'API_URI': JSON.stringify(process.env.API_URI || ''),
        'BASE_APP_PATH': JSON.stringify(process.env.BASE_APP_PATH || '/'),
        'STATIC_ROOT': JSON.stringify(process.env.STATIC_ROOT || '')
      }
    })

  ]
};

module.exports = config;
