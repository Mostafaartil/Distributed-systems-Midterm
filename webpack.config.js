const path = require('path');

module.exports = {
  entry: './src/index.js',  // Update with your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
