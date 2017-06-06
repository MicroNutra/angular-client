var webpack = require('webpack');

module.exports = {
  entry: {
    app: __dirname + '/public/app.module.js'
  },
  output: {
    path: __dirname + '/public/js',
    filename: 'app.bundle.js'
  },
  module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: "html"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  },
  devtool: "#inline-source-map"
};
