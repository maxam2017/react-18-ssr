const path = require('node:path');
const { SwcMinifyWebpackPlugin } = require('swc-minify-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    isDev &&
      new ReactRefreshWebpackPlugin({
        overlay: false,
      }),
  ].filter(Boolean),
  optimization: {
    minimize: !isDev,
    minimizer: [new SwcMinifyWebpackPlugin()],
  },
  stats: 'minimal',
  devServer: {
    hot: true,
    port: 4000,
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
