module.exports = {
  entry: './app/main.ts',
  output: { filename: 'dist/bundle.js' },
  resolve: { extensions: ['.ts', '.js'] },
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['angular2-template-loader', 'ts-loader'], exclude: /node_modules/ },
      { test: /\.component\.html$/, loader: ["raw-loader"] },
      { test: /\.component\.css$/, loader: ["raw-loader"] },
    ]
  }
};
