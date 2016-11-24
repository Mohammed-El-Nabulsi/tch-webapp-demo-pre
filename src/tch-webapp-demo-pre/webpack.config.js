var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    context: path.join(__dirname),
    entry: ['babel-polyfill', './Frontend/main.jsx'],
    output: {
        path: path.join(__dirname, 'wwwroot/built'),
        filename: '[name].bundle.js',
        publicPath: '/built/',
    },

    watch: true,

    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                },
            },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'file'
            }, {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                loader: 'file'
            },
        ],
    },

    postcss: function() {
        return [autoprefixer];
    },

    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            jQuery: 'jquery',
            $: 'jquery',
        }),
        new ExtractTextPlugin('[name].bundle.css', {
            allChunks: true
        })
    ],

    resolve: {
        root: [path.resolve(__dirname, 'node_modules')],
        modulesDirectories: ['node_modules', '.'],
        extensions: ['', '.js', '.jsx'],
    }
}
