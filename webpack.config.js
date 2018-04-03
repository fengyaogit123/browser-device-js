const path = require('path');
const webpack = require("webpack");
const Uglify = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "device.js",
        path: __dirname + '/lib/',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{ loader: "babel-loader" }]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        openPage: "./index.html",
        inline: true

    },
    plugins: [
        new Uglify()
    ]
};