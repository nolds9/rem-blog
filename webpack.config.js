var webpack = require('webpack');
var path = require('path');
var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  devtool: 'eval',
  entry: {
    // probably index.js
  },
  output: {
    path: path.join(__dirname, './public/javascripts/dist'),
    filename: '[name].js' // should there be a comma after this and why [name]?
  },
  resolve: {
    extension: ['', '.js', 'e.s6', '.jsx']
  },
  module: {
    loaders: [
      // es6 and react through babel
      {
        test: /\.js?$/,
        loader: ['babel'],
        query: {
          presets: ['es2015', 'react']
        }
      },
      // es6 and react through babel
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      // test styles
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      // test json
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    commonsPlugin
  ]
};
