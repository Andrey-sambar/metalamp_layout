const PugPlugin = require('pug-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
  plugins: [
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['dist'],
        },
      },
    }),
    new PugPlugin({
      entry: {
        // define many page templates here
        index: 'src/index.pug', // => dist/index.html
      },
      js: {
        // JS output filename
        filename: 'js/[name].[contenthash:8].js',
      },
      css: {
        // CSS output filename
        filename: 'css/[name].[contenthash:8].css',
      },
    }),
  ],
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(s?css|sass)$/,
        use: ['css-loader', 'sass-loader'],
      },
      {
        test: /\.(ico|png|jp?g|webp|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext][query]',
        },
      },
    ],
  },
};