'use strict';
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
let destFolder = 'dist/';

// The development server (the recommended option for development)
gulp.task('default', ['build']);

// Production build
gulp.task('build', ['webpack:build', 'index:build']);

gulp.task('index:build', () => {
    gulp.src('./src/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(destFolder))
});

gulp.task('webpack:build', () => {
    var config = Object.create(webpackConfig);
    var plugins = config.plugins || [];
    config.plugins = plugins.concat(
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );

    return gulp.src('src/entry.js')
        .pipe(webpackStream(config))
        .pipe(gulp.dest(destFolder))
});