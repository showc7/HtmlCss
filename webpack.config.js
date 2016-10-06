var path = require('path')
var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin')
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "budle.js",
    publicPath: ""
  },
  watch: true,
  watchOptions: {
    aggregatetimeout: 100
  },
  devtool: "chaep-inline-module-source-map",
  plugins: [
    new ExtractTextPlugin('styles.css', {
            allChunks: true
        })
  ],
  module: {
    loaders: [
      {
          test: /\.jsx?$/,
          exclude: [/node_modules/],
          loader: "babel-loader",
          query: {
              presets: ['es2015', 'react', 'stage-0', 'stage-1']
          }
      },
      {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
          test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
          loader: 'file-loader'
      }
    ]
  }
}
