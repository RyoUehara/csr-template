import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import merge from 'webpack-merge';
import common from './webpack.config.babel';

export default merge(common, {
  mode: 'production',
  output: {
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
  },
  plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin()],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor',
    },
  },
});
