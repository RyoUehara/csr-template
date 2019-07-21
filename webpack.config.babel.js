import webpack from 'webpack';
import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

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
      use: [
        'babel-loader',
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      ],
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
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, 'tsconfig.json')
    })
  ]
};
