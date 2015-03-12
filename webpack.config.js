module.exports = {
  entry: './src/js/index.jsx',

  output: {
    path: 'dist',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'Presentation'
  },

  externals: {
    "react": "react",
    "react/addons": "react/addons"
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?harmony'
      }
    ]
  }
};