// webpack에서 script 불러올 경우 requre
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval",
  // mode: "production",
  // devtool:'hidden-source-map',
  // 개발할때 eval로 하면 webpack이 build하는 속도가 빨라진다.
  resolve: {
    extensions: [".js", ".vue"],
    // import 할때 확장자를 쓰지 않아도 된다.
  },
  entry: {
    app: path.join(__dirname, "main.js"),
    // app은 나중에 하나로 합쳐질 파일이름 app.js
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
    publicPath: "/dist",
    // path는 폴더 경로 dist폴더 안 app.js가 생긴다.
  },
};
// webpack은 여러개의 script를 하나로 통합
