module.exports = {
  entry: {
    local: './src/local.js',
    remote: './src/remote.js'
  },
  output: {
    path: './dist',
    filename: "[name].js",
    libraryTarget: 'umd',
    library: 'semiNative'
  },
  module: {
    loaders: [ {test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }}
    ]
  }
};
