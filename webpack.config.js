const HWP = require("html-webpack-plugin");
const path = require('path')

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
         }]
     },
     plugins:[
         new HWP(
            {template: path.join(__dirname,'./src/index.html')}
         )
     ]
  }
