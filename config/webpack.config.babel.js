const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const ENV = process.env.NODE_ENV || 'production'


module.exports = {
	context: path.resolve(__dirname, '../examples/src'),

  entry: './index.js',

  externals: [ nodeExternals({
    whitelist: ['styled-components']
  }) ],

	output: {
		path: path.resolve(__dirname, '../examples/dist'),
		publicPath: '/',
		filename: 'index.js',
    libraryTarget: "umd"
	},

	resolve: {
		extensions: ['.jsx', '.js', '.json'],
		modules: [
      path.resolve(__dirname, "../examples"),
			path.resolve(__dirname, '../node_modules')
		],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
    }
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: path.resolve(__dirname, '../src'),
				enforce: 'pre',
				use: 'source-map-loader'
			},
			{
				test: /\.jsx?$/,
        loader: 'babel-loader'
			},
			{
				test: /\.json$/,
				use: 'json-loader'
			}
		]
	},
	plugins: ([
    new CaseSensitivePathsPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()
  ]),

	stats: { colors: true },

  target: 'node',

  node: {
    __dirname: false,
    __filename: false
  },

	devtool: 'source-map',
}
