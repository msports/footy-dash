'use strict';
var path = require('path');
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');


module.exports = {
	entry: {
		index: './js/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'build', 'js'),
		filename: '[hash].[name].bundle.js',
		chunkFilename: '[hash].[id].bundle.js',
		publicPath: 'js/'
	},	
    debug: true,
    //devtool: 'sourcemap',	
	module: {
		preLoaders: [
			{
				test: /\.js$/, // include .js files
				exclude: /(node_modules|bower_components)/, // exclude any and all files in the node_modules folder
				loaders: ['eslint']
			}
        ],	
		loaders: [
			{
				test: /\.css$/,
				loader: 'style/useable!css!'
            },
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: [
                        'es2015'
                    ]
                }
            },		
			{
				test: /\.(eot|svg|ttf|woff|woff2)\w*/,
				loader: 'file'
            },
			{
				test: /\.html$/,
				loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './js/')) + '/!html'
				//loader: 'raw' 
            }
        ]
	},
	resolve: {
		root: [
            path.resolve(__dirname),
            path.resolve(__dirname, 'js/'),
            path.resolve(__dirname, 'js/fw/')
        ]
	},
	plugins: [
        new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			  mangle: false,
			  comments: false,
			  compress : {
				screw_ie8 : true
			  },
		}),
		new ngAnnotatePlugin({add: true}),
        new webpack.optimize.CommonsChunkPlugin('[hash].common.bundle.js'),
		new webpack.ProvidePlugin({
			$: 'jquery',
			'window.jQuery': 'jquery'
		})
    ]
};