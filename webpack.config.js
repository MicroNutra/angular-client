var webpack = require('webpack');

module.exports = {
  entry: {
    app: __dirname + '/public/app.module.js',
    vendor: ['angular']
  },
  output: {
    path: __dirname + '/public/js',
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      path: __dirname + '/public/js',
      filename: 'vendor.bundle.js'
    })
  ]
};
