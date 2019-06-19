import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.config.babel';
import path from 'path';

export default merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
