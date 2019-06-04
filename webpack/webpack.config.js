const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

const SRC_PATH = path.resolve(__dirname, '../src')
const OUT_PATH = path.resolve(__dirname, '../lib')

module.exports = {
  entry: [path.resolve(SRC_PATH, 'index.ts')],
  output: {
    path: OUT_PATH,
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        loaders: [
          { loader: 'babel-loader' },
          { loader: 'awesome-typescript-loader' },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  externals: {
    react: 'commonjs react',
    'embla-carousel': 'embla-carousel',
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new CleanWebpackPlugin(['lib'], {
      root: path.resolve(__dirname, '../'),
    }),
  ],
}
