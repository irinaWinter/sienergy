const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true
      },
    },
    'css-loader'
  ]

  if (extra) {
    loaders.push(extra)
  }

  return loaders
}

const babaelOptions = preset => {
  const opts = {
    presets: [
      '@babel/preset-env',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  }

  if (preset) {
    opts.presets.push(preset)
  }

  return opts
}

const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: babaelOptions()
  }]

  if (isDev) {
    loaders.push('eslint-loader')
  }

  return loaders
}

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename('css')
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/logo.svg'), to: path.resolve(__dirname, 'dist') },
        { from: path.resolve(__dirname, 'src/water.png'), to: path.resolve(__dirname, 'dist') },
        { from: path.resolve(__dirname, 'src/vk-icon.svg'), to: path.resolve(__dirname, 'dist') },
        { from: path.resolve(__dirname, 'src/fb-icon.svg'), to: path.resolve(__dirname, 'dist') },
        { from: path.resolve(__dirname, 'src/img'), to: path.resolve(__dirname, 'dist') }
      ]
    })
  ]

  if (isProd) {
    base.push(new BundleAnalyzerPlugin())
  }

  return base
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json', '.jpg'],
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src'),
      '@img': path.resolve(__dirname, './img'),
    }
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev,
    overlay: true
  },
  devtool: isDev ? 'source-map' : '',
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        }  
      },
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.less$/,
        use: cssLoaders('less-loader')
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        use: ['file-loader']
      },
      // {
      //   test: /\.xml$/,
      //   use: ['xml-loader']
      // },
      // {
      //   test: /\.csv$/,
      //   use: ['csv-loader']
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      }
      // {
      //   test: /\.ts$/,
      //   exclude: /node_modules/,
      //   loader: {
      //     loader: 'babel-loader',
      //     options: babaelOptions('@babel/preset-typescript')
      //   }
      // },
      // {
      //   test: /\.jsx$/,
      //   exclude: /node_modules/,
      //   loader: {
      //     loader: 'babel-loader',
      //     options: babaelOptions('@babel/preset-react')
      //   }
      // }
    ]
  }
}