const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = require('./base.config');
const { version } = require('../package.json');

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
    ignoreOrder: false,
  }),
  new HtmlWebpackPlugin({
    hash: true,
    inject: true,
    template: 'public/index.html',
    favicon: 'public/favicon.ico',
    minify: {
      collapseWhitespace: true,
      conservativeCollapse: false,
    },
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    'process.env.VERSION': JSON.stringify(version),
  }),
  new webpack.ProgressPlugin(),
];

module.exports = merge(baseConfig, {
  cache: true,
  devtool: 'eval-source-map',
  mode: 'development',
  plugins,
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'app.bundle.js',
    publicPath: '/',
    chunkFilename: '[name].chunk.js',
  },
  devServer: {
    port: '8888',
    historyApiFallback: true,
  },
  watchOptions: { ignored: /node_modules/ },
  stats: {
    assets: false,
    children: false,
  },
});
