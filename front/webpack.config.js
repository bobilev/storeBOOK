'use strict'

var webpack = require('webpack');
module.exports = {
    entry: __dirname + '/js/app.jsx',
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
            }
        ]
    },
};
