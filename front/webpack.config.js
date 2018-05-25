'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
        home: [
            __dirname + '/source/js/app.jsx',
            __dirname + '/source/sass/main.scss'
        ],
      },
  output: {
    path: __dirname + '/dist',
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          //fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};
