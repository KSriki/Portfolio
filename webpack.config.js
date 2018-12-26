const HWP = require("html-webpack-plugin");
const path = require('path')

const combineLoaders = require('webpack-combine-loaders')
// at top of file
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

 module.exports = {
     entry: path.join(__dirname, './src/index.js'),
     output: {
         filename: 'bundle.js',
         path: path.join(__dirname, '/dist')},
     module:{
         rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         },
         {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // you can specify a publicPath here
                  // by default it use publicPath in webpackOptions.output
                  publicPath: path.join(__dirname, '/dist')
                }
              },
              "css-loader"
            ]
          }
        ]
     },
     plugins:[
         new HWP(
            {template: path.join(__dirname,'./src/index.html')}
         ),
         new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
          })
     ]
  }
