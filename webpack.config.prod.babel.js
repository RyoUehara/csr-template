import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import {
  BundleAnalyzerPlugin
} from 'webpack-bundle-analyzer';
import CompressionPlugin from 'compression-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';
import common from './webpack.config.babel';

export default merge(common, {
  mode: 'production',
  output: {
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerHost: '0.0.0.0'
    }),
    new CompressionPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      removeComments: true,
      minifyCss: true
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      })
    ],
    splitChunks: {
      chunks: 'all',
      name: 'vendor',
    },
  },
});
