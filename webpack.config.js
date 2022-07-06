const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {XPlugin}= require('./plugin')

const loaders = (...loaders) => [
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      modules: 'icss',
    },
  },
  ...loaders,
]
module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.ts',
    admin: './src/admin.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'admin.html',
      chunks: ['admin'],
    }),
	  new XPlugin()
  ],
  output: {
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: loaders({
          loader: 'sass-loader',
          options: {
            additionalData: `@import "@/scss-vars";`,
          },
        }),
      },
      {
        test: /\.less$/,
        use: loaders({
          loader: 'less-loader',
          options: {
            additionalData: `@import "@/less-vars";`,
          },
        }),
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          priority: 10,
          minSize: 0 /* 如果不写 0，由于 React 文件尺寸太小，会直接跳过 */,
          test: /[\\/]node_modules[\\/]/, // 为了匹配 /node_modules/ 或 \node_modules\
          name: 'vendors', // 文件名
          chunks: 'all', // all 表示同步加载和异步加载，async 表示异步加载，initial 表示同步加载
          // 这三行的整体意思就是把两种加载方式的来自 node_modules 目录的文件打包为 vendors.xxx.js
          // 其中 vendors 是第三方的意思
        },
        common: {
          priority: 5,
          minSize: 0,
          minChunks: 2,
          chunks: 'all',
          name: 'common',
        },
      },
    },
  },
}
