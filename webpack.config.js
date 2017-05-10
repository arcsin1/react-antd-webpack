
'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");  //css单独打包
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var copy = require('quickly-copy-file');
var del = require('del');
// 开发环境
var isDev = function() {
  return process.env.NODE_ENV.trim() === 'development';
};

// 生产环境
var isProd = function() {
  return process.env.NODE_ENV.trim() === 'production';
};

copyAndDelFiles();

module.exports = {
    devtool: isProd() ? false : 'inline-source-map',

    entry: {
        main: './src/entry.js', //唯一入口文件
        vendor: [
          'react',
          'react-dom',
          'react-router',
          'react-redux',
          'redux',
          'redux-thunk',
        ]
    },
    output: {
        path: './build',
        filename: isProd() ? '[name].[chunkhash:8].js' : '[name].js',
        chunkFilename: isProd() ? '[name].chunk.[chunkhash:8].js' : '[name].chunk.js',
        publicPath: isProd() ? './build/' : '/build/'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx!babel", include: /src/},
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css!postcss")},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!postcss!sass")},
            { test: /\.(png|jpg|gif)$/, loader: 'url?limit=819200'}
        ]
    },

    babel: {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['transform-runtime','transform-decorators-legacy',['import', {
          libraryName: 'antd',
          style: 'css',
        }]]
    },

    postcss: [
        require('autoprefixer')    //调用autoprefixer插件,css3自动补全
    ],

    // devServer: {
    //     port: 8888,
    //     colors: true,  //终端中输出结果为彩色
    //     historyApiFallback: true,  //不跳转
    //     inline: true  //实时刷新
    // },

    // plugins: [
    //     new ExtractTextPlugin('main.css'),
    //     new CommonsChunkPlugin({
    //        name: 'vendor',
    //        filename: 'vendor.js'
    //     })
    // ]
     plugins: getPlugins()

}

// 复制和删除文件
function copyAndDelFiles() {
  var copyFile = '';

  // 复制文件
  if (isDev()) {
    copyFile = 'src/views/index_dev.html';
  }

  if (isProd()) {
    copyFile = 'src/views/index.html';
  }

  copy(copyFile, 'index.html', function(error) {
    if (error) {
      return console.error(error);
    }
  });

  if (isProd()) {
    del(['dist']);
  }
}


// 获取配置
function getPlugins() {
  var plugins = [
    new webpack.DefinePlugin({
      __DEV__ : isDev(),
      __PROD__: isProd(),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV.trim())
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', isProd() ? 'vendor.[chunkhash:8].js' : 'vendor.js'),
    new ExtractTextPlugin(isProd() ? '[name].[chunkhash:8].css' : '[name].css'),
  ];

  if (isDev()) {
    plugins.push(
      new OpenBrowserPlugin({ url: 'http://localhost:8080/' })
    );
  }

  if (isProd()) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        output: {
          comments: false,
        },
        compress: {
          warnings: false
        }
      }),
      new HtmlWebpackPlugin({
        title: '空格',
        filename: '../index.html',
        template: './src/views/index.html'
      }),
      new WebpackMd5Hash()
    );
  }

  return plugins
}
