"use strict";
var gulp = require("gulp");
var eslint = require("gulp-eslint");
var excludeGitignore = require("gulp-exclude-gitignore");

gulp.task("static", function () {
  return gulp.src("**/*.js")
    .pipe(excludeGitignore())
    .pipe(eslint({useEslintrc: true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("default", ["static"]);
