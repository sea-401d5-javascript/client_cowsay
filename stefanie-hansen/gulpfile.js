'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const del = require('del');
const eslint = require('gulp-eslint');

const paths = {
  js: __dirname + '/app/**/*.js',
  html: __dirname + '/app/index.html',
  css: __dirname + '/app/css/style.css'
};

const watchFiles = [__dirname + '/app/**/*.js', __dirname + '/app/index.html', __dirname + '/app/css/style.css'];

gulp.task('lint', () => {
  gulp.src(paths.js)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('copy', () => {
  gulp.src(paths.html)
    .pipe(gulp.dest('./build'));
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

gulp.task('clean', () => {
  return del(['build/*']);
});

gulp.task('build', ['clean', 'copy', 'bundle']);

gulp.task('watch', () => {
  gulp.watch(watchFiles, ['lint', 'clean', 'copy', 'build']);
});

gulp.task('default', ['build']);
