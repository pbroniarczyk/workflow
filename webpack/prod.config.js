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
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
    ignoreOrder: false,
  }),
  new HtmlWebpackPlugin({
    hash: true,
    inject: true,
    title: 'Career Space',
    filename: 'index.html',
    template: 'public/index.html',
    favicon: 'public/favicon.ico',
    minify: {
      collapseWhitespace: true,
      conservativeCollapse: false,
    },
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.VERSION': JSON.stringify(version),
  }),
];

module.exports = merge(baseConfig, {
  cache: false,
  devtool: 'source-map',
  mode: 'production',
  plugins,
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[contenthash:6].js',
    publicPath: '/',
    chunkFilename: '[name].[chunkhash:6].chunk.js',
  },
  optimization: {
    chunkIds: 'named',
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
});
