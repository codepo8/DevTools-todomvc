const path = require('path');

module.exports = {
  entry: './app.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '')
  }
};