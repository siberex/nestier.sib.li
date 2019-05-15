const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin-next');

module.exports = {
  entry: ['webpack/hot/poll?100', './src/main.ts'],
  watch: true,
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?100'],
    }),
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        extensions: ['.tsx', '.ts', '.js']
      })
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackShellPlugin({
      onBuildEnd: {
        scripts: ['nodemon --config "" --watch dist/main.js dist/main.js']
      }
    })
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
};
