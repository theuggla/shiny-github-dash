'use strict'

let webpack = require('webpack')
let path = require('path')
let config = require('./webpack.config.base.js')
let cwd = __dirname || process.cwd()
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')

let DIST = path.join(cwd, '../client/build/')

config.output = {
  path: DIST,
  filename: '[name].min.js'
}

config.plugins = config.plugins.concat([
  new UglifyJsPlugin({
    uglifyOptions: {
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
])

// Exports.
module.exports = config
