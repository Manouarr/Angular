const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.[contenthash].js', //contenthash est optionnel
    clean: true,
    path: path.resolve(__dirname, 'dist'), //chemin absolu
  },
  mode: 'development',
  devtool: 'inline-source-map', //ajout des fichiers de sourceMapping
  module: {
    rules: [ 
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ts$/, 
        use: 'ts-loader',
        exclude: /node_modules/ 
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new CopyWebpackPlugin({
      patterns : [
      {from:'src/images',to:'images'} 
    ]}), 
  ],
  devServer: {
    static: {
      directory : "./src"
    }
  }
};


