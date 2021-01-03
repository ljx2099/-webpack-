const { name } = require("file-loader");
const path = require("path");
const webpack = require("webpack");
const html = require("html-webpack-plugin");
const uglifiyjswebpackOlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  //入口
  entry : "./src/main.js",
  output : {
    //出口
    //path系统模块用于获取路径
    path : path.resolve(__dirname,"dist"),
    filename: "main-dev.js",
  },
  module:{
    rules:[
      {
        test: /\.css$/,
      //cssloader 负责将css进行加载  "css-loader": "^2.0.2", 注意版本
   
      //stylyloader 负责将css加进dom "style-loader": "^0.23.1",
      use: ["style-loader","css-loader"]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              /* 当加载的图片小于limit设置值 会将图片转为base64字符串形式
                  当加载的图片大于limit设置值时 需要file-loader模块进行加载
              */
              limit: 8192 //定义显示图片文件大小在这个范围之内
              ,
              //设置生成文件放到入口文件夹下的指定文件夹并设置 文件名
              //生成img文件夹 继承原文件文件名 生成hash8位 继承原文件拓展名
              name:"img/[name].[hash:8].[ext]"
            }
            
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  },
  resolve:{
    //切换到template的vue版本
    alias:{
      "vue$":"vue/dist/vue.esm.js"
    },
    //配置文件拓展名 import时候可省略后缀
    extensions:[".js",".css",".vue"]
  },
  plugins:[
    new webpack.BannerPlugin("最终版权归梁珏馨所有"),
    new html({
      template:"index.html"
    }),
    //压缩 
    new uglifiyjswebpackOlugin()
  ],
  devServer:{
    contentBase:"./dist",
    inline:true
  }

}