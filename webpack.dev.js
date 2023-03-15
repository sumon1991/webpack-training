const path = require('path');
 const webpack = require('webpack');

 module.exports = {
   entry: {
     index: './index.js' // Entrypoint 
   },
   output: {
    path: path.join(__dirname, 'dev-build'), // generate directory by default it was dist I renamed it to dev-build
    publicPath: '/',
    filename: '[name].bundle.js',
    clean: true,
   },
   mode: 'development',
   target: 'node',
   module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        }
    ]
   },
 };