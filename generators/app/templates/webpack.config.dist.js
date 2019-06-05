/*
 * Copyright (c) <%= info.year %>, <%- info.copyrightHolder %>
 *
 * License: MIT
 */

module.exports = {
  entry: [
    "."
  ],
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist/",
    filename: "<%= inputs.packageName %>.js",
    library: "<%= inputs.packageName %>",
    libraryTarget: "umd"
  },
  externals: {
    "megadraft": "Megadraft",
    "react": "React",
    "react-dom": "ReactDOM"
  },
  devtool: "source-map",
  devServer: {
    inline: true,
    contentBase: "./"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  }
};
