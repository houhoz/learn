import { Configuration, DefinePlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import * as dotenv from 'dotenv'
const path = require('path')
import WebpackBar from 'webpackbar'

// 加载配置文件
const envConfig = dotenv.config({
  path: path.resolve(
    __dirname,
    '../env/.env.' + process.env.BASE_ENV
  ),
})

const styleLoadersArray = [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: '[path][name]__[local]--[hash:5]',
      },
    },
  },
  // 添加 postcss-loader
  'postcss-loader',
]

const baseConfig: Configuration = {
  cache: {
    type: 'filesystem', // 使用文件缓存
  },
  entry: path.join(__dirname, '../src/index.tsx'), // 入口文件
  // 打包出口文件
  output: {
    filename: 'static/js/[name].js', // 每个输出js的名称
    path: path.join(__dirname, '../dist'), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: '/', // 打包后文件的公共前缀路径
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  // loader 配置
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // 匹配.ts, tsx文件
        exclude: /node_modules/,
        // use: 'babel-loader',
        use: ['thread-loader', 'babel-loader'], // 项目变大之后再开启多进程loader
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        // use: styleLoadersArray,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [...styleLoadersArray, 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // 匹配图片文件
        exclude: /node_modules/,
        type: 'asset', // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64
          },
        },
        generator: {
          filename: 'static/images/[hash][ext][query]', // 文件输出目录和命名
        },
      },
      {
        test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        exclude: /node_modules/,
        type: 'asset', // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64
          },
        },
        generator: {
          filename: 'static/fonts/[hash][ext][query]', // 文件输出目录和命名
        },
      },
      {
        // 匹配json文件
        test: /\.json$/,
        exclude: /node_modules/,
        type: 'asset/resource', // 将json文件视为文件类型
        generator: {
          // 这里专门针对json文件的处理
          filename: 'static/json/[name].[hash][ext][query]',
        },
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.css',
      '.scss',
      '.sass',
      '.json',
    ],
    // 别名需要配置两个地方，这里和 tsconfig.json
    alias: {
      '@': path.join(__dirname, '../src'),
    },
  },
  // plugins
  plugins: [
    new WebpackBar({
      color: '#85d', // 默认green，进度条颜色支持HEX
      basic: false, // 默认true，启用一个简单的日志报告器
      profile: false, // 默认false，启用探查器。
    }),
    new HtmlWebpackPlugin({
      title: 'react-ts-webpack-starter',
      filename: 'index.html',
      // 复制 'index.html' 文件，并自动引入打包输出的所有资源（js/css）
      template: path.join(__dirname, '../public/index.html'),
      inject: true, // 自动注入静态资源
      hash: true,
      cache: false,
      // 压缩html资源
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true, //去空格
        removeComments: true, // 去注释
        minifyJS: true, // 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
        minifyCSS: true, // 缩小CSS样式元素和样式属性
      },
      nodeModules: path.resolve(__dirname, '../node_modules'),
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(envConfig.parsed),
      'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
}

export default baseConfig
