'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  // context: __dirname,
  devServer: { contentBase: path.resolve(__dirname, 'docs') },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' }
      // { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main.html',
      filename: 'index.html'
    })
  ]
}
