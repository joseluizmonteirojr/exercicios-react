const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output:{
        path: path.join(__dirname, 'dist'),
        filename: './bundle.js'
    },
    devServer:{
        port: 8080,
        contentBase: './dist'
    },
    module:{
        rules:[{
            test: /.jsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    }

}