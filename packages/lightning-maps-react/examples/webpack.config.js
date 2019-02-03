const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, '../examples/index.js'),
  output: {
    path: path.join(__dirname, '../examples/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@src': path.resolve(__dirname, '../src/index.js')
    }
  },
  devServer: {
    contentBase: './examples/dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../examples/index.html'),
      inject: 'body'
    })
  ]
}
