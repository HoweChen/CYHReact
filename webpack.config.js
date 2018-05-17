const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        // exclude: ["/node_modules/", "/src/src-backup/"]
        exclude: ["/node_modules/", "/src/src/backup/"]
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
    contentBase: path.join(__dirname, "public"),
    // to make sure react router do the routing instead of server-side routing
    historyApiFallback: true
  }
};
