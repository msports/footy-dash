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
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        publicPath: 'js/'
    },
    debug: true,
    devtool: 'sourcemap',
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
                loader: 'style/useable!css!autoprefixer?browsers=last 5 version!'
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
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
		new ngAnnotatePlugin({
            add: true,
            // other ng-annotate options here 
        }),
        new webpack.optimize.CommonsChunkPlugin('common.bundle.js'),
		new webpack.ProvidePlugin({$: 'jquery', 'window.jQuery': 'jquery'})		
    ]
};
