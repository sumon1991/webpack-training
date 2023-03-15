const path = require('path');

// its comes with webpack so you don't need to install separately; It will remove your logs.
const TerserPlugin = require('terser-webpack-plugin'); 

 module.exports = {
   entry: {
     index: './index.js' // Entrypoint 
   },
   output: {
    // generate directory by default it was dist I renamed it to prod-build-optimization
    path: path.join(__dirname, 'prod-build-optimization'), 
    publicPath: '/',
    filename: '[name].bundle.js',
    clean: true,
   },
   mode: 'production',
   target: 'node',
   optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true
          }
        },
      }),
    ],
   },
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