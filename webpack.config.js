'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const bourbon = require('node-bourbon').includePaths
const neat = require('node-neat').includePaths

module.exports = {
  entry: './app/index.js',
  module: {
    rules: [
      { test: /\.jsx?$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.jsx?$/, // both .js and .jsx
        loader: 'eslint-loader',
        include: path.resolve(__dirname, './app'),
        enforce: 'pre',
        options: {
          fix: true
        }
      },
    /*  {
        test: /\.jsx/,
        loader: 'es6-template-strings-jsx'
      },*/
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader!sass-loader?includePaths[]=" + bourbon + "&includePaths[]=" + neat
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include : path.resolve(__dirname, './app/img'),
        loader  : 'url-loader?limit=30000&name=images/[name].[ext]'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template:'./app/core/index.html'
    } ),
    new ExtractTextPlugin( 'styles.css' ),
    new CopyWebpackPlugin([
      { from: './app/img', to: './img' }
    ])

  ]
}