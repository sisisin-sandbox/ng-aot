module.exports = {
  entry: './_tmp/main.js',
  output: {
    filename: 'dist/bundle.js'
  },
  resolve: { extensions: ['.ts', '.js'] },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['angular2-template-loader'], exclude: /node_modules/ },
      { test: /\.component\.html$/, loader: ["raw-loader"] },
      { test: /\.component\.css$/, loader: ["raw-loader"] },
    ]
  }
};
