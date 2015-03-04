module.exports = {
  entry: './src/index.jsx',

  output: {
    path: 'dist',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'Presentation'
  },

  externals: {
    'react': 'React'
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