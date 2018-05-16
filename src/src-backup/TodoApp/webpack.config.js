const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  // use source map to make debug easier
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public")
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  }
};
