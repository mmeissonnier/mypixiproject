const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const HOST = 'localhost';
const PORT = '9000';

module.exports = {
  entry: [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    './src/index.js',
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: './node_modules',
        loader: 'babel-loader',
        options: {
          presets: ["es2015"]
        },
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    noInfo: true,
    inline: true,
    hot: true,
    port: PORT,
    host: HOST,
    historyApiFallback: true,
  },
  plugins: [new htmlWebpackPlugin({
    template: './src/index.html'
  })],
  target: 'web',
};
