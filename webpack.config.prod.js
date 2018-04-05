const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: [
    './src/app/App.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      settings: path.resolve(__dirname, 'src/env/prod')
    }
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'css/app.css' }),
    new HtmlWebpackPlugin({
      filename: 'index.html', 
      css: 'css/style.css',
      template: path.resolve(__dirname, 'src/index.ejs'),
      inject: false
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
          commons: { test: /[\\/]node_modules[\\/]/, name: "vendors", chunks: "all" }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: false
      })
    ],
	},
  module: {
    rules: [
      { enforce: "pre", test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "eslint-loader" }, 
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] }, 
      { test: /\.html/, loader: 'file-loader?name=[name].[ext]'}, 
      { test: /\.scss$/,  use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [{
        loader: 'css-loader',
        options: { minimize: true}
      },{
        loader: 'sass-loader',
        options: { minimize: true }
      }]})}
    ]
  }
}