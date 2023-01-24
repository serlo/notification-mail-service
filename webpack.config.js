const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const TsconfigPathsPlugin =
  require('tsconfig-paths-webpack-plugin').TsconfigPathsPlugin

module.exports = {
  entry: './template-dev/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template-dev/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /node_modules/,
      },
    ],
  },
}
