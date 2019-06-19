import webpack from 'webpack';
import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/[name].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)?$/,
      use: ['babel-loader', 'ts-loader'],
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.tsx', '.js', '.ts'],
    alias: {
      '$components': path.resolve(__dirname, 'src/components'),
      '$util': path.resolve(__dirname, 'src/util')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
