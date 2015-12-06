var gulp = require("gulp");
var gutil = require("gulp-util");
var shell = require('gulp-shell');

gulp.task('webpack', shell.task(['./node_modules/.bin/webpack']));
gulp.task("webpack-dev-server", shell.task(['./node_modules/.bin/webpack-dev-server --progress --colors']));

gulp.task('default', ['webpack-dev-server']);
