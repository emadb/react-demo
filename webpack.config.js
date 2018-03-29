const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    './src/index.html',
    './src/app/App.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: "initial",
					minChunks: 2,
					maxInitialRequests: 5, 
					minSize: 0 
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
	},
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.html/, 
        loader: 'file-loader?name=[name].[ext]', 
      }, {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" 
        }, {
            loader: "css-loader" 
        }, {
            loader: "sass-loader", options: { sourceMap: true }
        }]
    }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
}