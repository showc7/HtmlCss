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
    filename: "static/js/bundle.js",
    publicPath: ""
  },
  watch: true,
  watchOptions: {
    aggregatetimeout: 100
  },
  devtool: "chaep-inline-module-source-map",
  plugins: [
    new ExtractTextPlugin('static/styles/styles.css', {
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
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader?name=[path][name].[ext]"
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
          loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  }
}
