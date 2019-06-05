/*
 * Copyright (c) <%= info.year %>, <%- info.copyrightHolder %>
 *
 * License: MIT
 */

var gulp = require("gulp");
var gutil = require("gulp-util");
var gulpSass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.demo.js");

function sass(done) {
  return gulp
    .src("./src/styles/**/*.scss")
    .pipe(gulpSass.sync({ outputStyle: "expanded" }).on("error", gulpSass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./dist/css"));
}

function demoSass() {
  return gulp
    .src("./demo/main.scss")
    .pipe(gulpSass.sync().on("error", gulpSass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./demo"));
}

function demoWatch() {
  gulp.watch("./src/styles/**/*.scss", demoSass);
  gulp.watch("./demo/main.scss", demoSass);
}

function build(callback) {
  gulp.start(sass);
}


const devServer = gulp.parallel([demoSass, demoWatch], function devServer() {
  new WebpackDevServer(webpack(webpackConfig), {
    stats: { colors: true }
  }).listen(8080, "localhost", function(err) {
    if (err) {
      throw new gutil.PluginError("webpack-dev-server", err);
    }
  });
});


exports.sass = sass;
exports.build = build;
exports["dev-server"] = devServer;
exports["demo-sass"] = demoSass;
exports["demo-watch"] = demoWatch;

// The development server (the recommended option for development)
exports.default = devServer;
