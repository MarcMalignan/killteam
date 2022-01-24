const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const title = "Kill Team Tools";
const themeColor = "#000";

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.[hash:6].js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.(jpe?g|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./img/",
              name: "[name].[hash:6].[ext]",
            },
          },
          {
            loader: "image-webpack-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new FaviconsWebpackPlugin({
      title,
      background: themeColor,
      logo: "./src/img/favicon.png",
      prefix: "img/favicons/[hash:6]/",
      inject: true,
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
      emitStats: false,
      persistentCache: false,
    }),
  ],
  devServer: {
    port: 9000,
    compress: true,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
