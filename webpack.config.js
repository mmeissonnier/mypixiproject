const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const HOST = 'localhost';
const PORT = '9000';

module.exports = {
  entry: [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    './src/index.js',
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: '[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: 'node_modules',
        loader: 'babel-loader',
        options: {
          presets: ["es2015"]
        },
      },
    ]
  },
  target: 'node',
  externals: [nodeExternals()],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    noInfo: true,
    inline: true,
    hot: true,
    port: PORT,
    host: HOST,
    historyApiFallback: true,
  },
};
