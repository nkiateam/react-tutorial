'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfigEx = require('./examples/webpack.config.js');

var del = require('del');

gulp.task('example.clean', function() {
    return del('examples/build/*.js');
});

gulp.task('example', ['example.clean'], function() {
	return gulp.src('./examples/app.js')
		.pipe(webpack(webpackConfigEx))
		.pipe(gulp.dest('examples/build/'));
});

gulp.task('watch', function() {
	gulp.watch(['examples/**/*.js', '!examples/build/*.js'], ['example']);
});

gulp.task('default', ['example']);