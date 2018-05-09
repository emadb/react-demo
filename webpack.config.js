const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    './src/app/App.jsx'
  ],
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: './dist',
    hot: true
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      settings: path.resolve(__dirname, 'src/env/dev')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', 
      css: '',
      template: path.resolve(__dirname, 'src/index.ejs'),
      inject: false
    }),
  ],
  optimization: {
		splitChunks: {
			cacheGroups: {
        commons: { test: /[\\/]node_modules[\\/]/, name: "vendors", chunks: "all" }
      }
		}
	},
  module: {
    rules: [
      // { enforce: "pre", test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "eslint-loader" }, 
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] }, 
      { test: /\.html/, loader: 'file-loader?name=[name].[ext]' }, 
      { test: /\.scss$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader", options: { sourceMap: true } }]}
    ]
  }
}