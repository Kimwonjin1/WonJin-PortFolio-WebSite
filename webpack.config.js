const path = require('path');
const sass = require("sass");
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 
module.exports = {
    mode: "developent", 
    entry: './index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
      template: './index.html',
    })],
    devServer: {
        static:{
            directory: path.resolve(__dirname, 'dist'),
        },
        port :8080,
    },
     module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          "style-loader", //inject sstyles into Dom
          "css-loader", //turns css into indexjs
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        
        use: [{
          loader :'file-loader',
          options: {
            name: './img/[name].[ext]',
            publicPath: './dist',
          } 
      }]
      }
    ],
  },
  };