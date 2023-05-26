import path from 'path'
import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import CopyPlugin from 'copy-webpack-plugin'
import baseConfig from './webpack.base'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const prodConfig: Configuration = merge(baseConfig, {
  mode: 'production', // 生产模式,会开启tree-shaking和压缩代码,以及其他优化
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // 压缩css
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css', // 抽离css的输出目录和名称
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'), // 复制public下文件
          to: path.resolve(__dirname, '../dist'), // 复制到dist目录中
          filter: source => !source.includes('index.html'), // 忽略index.html
        },
      ],
    }),
  ],
})

export default prodConfig
