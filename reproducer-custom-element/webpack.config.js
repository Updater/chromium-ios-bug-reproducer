const { curryN } = require('ramda');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = curryN(3, path.resolve);
const relativePath = resolve(__dirname, './');

module.exports = {
  entry: relativePath('src/index.js'),
  output: {
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].js',
    path: relativePath('dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [relativePath('src')],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.html/,
        include: relativePath('src'),
        use: 'raw-loader',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: relativePath('dist/index.html'),
      template: relativePath('src/index.html'),
    }),
  ],
  devtool: 'source-map',
};
