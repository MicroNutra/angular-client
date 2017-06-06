var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: {
    app: '/public/app.module.js',
    vendor: ['angular']
  },
  output: {
    path: __dirname + '/js',
    filename: '/public/js/app.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
  ]
};
