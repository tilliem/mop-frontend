var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: {
    javascript: APP_DIR + '/app.js'
  },
  devServer: {
    host: "0.0.0.0",
  },
  devtool: 'sourcemap',
  output: {
    path: BUILD_DIR,
    publicPath: process.env.PUBLIC_ROOT || "/",
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
        test : /\.jsx?$/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: "file-loader?name=[name].[ext]",
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      template: 'local/index.html',
      inject: 'body',
      //hash: true,
      filename: 'index.html',
      staticPath: (process.env.STATIC_ROOT || '')
    }),
    ((process.env.PROD)
     ? new webpack.optimize.UglifyJsPlugin({sourceMap: true})
     : new webpack.HotModuleReplacementPlugin()),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(((process.env.PROD) ? 'production' : 'development')),
        'API_URI': JSON.stringify(process.env.API_URI ||
                                  (process.env.PROD ? '' : '/local')
                                 ),
        'API_WRITABLE': process.env.API_WRITABLE || process.env.PROD,
        'BASE_APP_PATH': JSON.stringify(process.env.BASE_APP_PATH || '/'),
        'STATIC_ROOT': JSON.stringify(process.env.STATIC_ROOT || ''),
        'PROD': process.env.PROD
      }
    })

  ]
};

module.exports = config;
