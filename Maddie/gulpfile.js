'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');

const paths = {
  js: __dirname + '/app/client.js',
  html: __dirname + '/app/index.html',
  css: __dirname + '/app/cowsay.css'
};

gulp.task('copy', () => {
  gulp.src(paths.html)
    .pipe(gulp.dest('./build'));
});

gulp.task('copyCSS', () => {
  gulp.src(paths.css)
    .pipe(gulp.dest('./build'));
});

gulp.task('bundle', () => {
  gulp.src(paths.js)
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('build', ['copy', 'copyCSS', 'bundle']);

gulp.watch('./app/client.js', './app/cowsay.css', './app/index.html', ['build']);
