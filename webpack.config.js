const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'aria2-rpc-tools.js',
    library: 'Aria2RPCTools',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // use: {
        //   loader: 'babel-loader',
        // },
      },
    ],
  },
};
