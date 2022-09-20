const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'app.js'
  },
  target: 'web',
  devServer: {
    port: '666',
    static: ['./public'],
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['*', '.css', '.ts', '.tsx','.js'],
    alias: {
      'styled-components': path.resolve(__dirname, './', 'node_modules', 'styled-components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index-template.html',
      inject: 'body',
    }),
  ]
};
