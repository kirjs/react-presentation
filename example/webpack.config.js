var webpack = require('webpack');

module.exports = {
  watch: true,
  entry: [
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    './index.jsx'
  ],

  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/},
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    publicPath: 'http://localhost:3000/',
    path: '/js/',
    filename: 'index.js'
  }

};