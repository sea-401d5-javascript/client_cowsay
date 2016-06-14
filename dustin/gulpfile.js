'use strict';
const gulp = require('gulp');
const webpack = require('webpack-stream');
const clean = require('gulp-clean');

const paths = {
  js: __dirname + '/app/client.js',
  html: __dirname + '/app/index.html',
  css: __dirname + '/app/style.css'
};

gulp.task('copy', () => {
  gulp.src([paths.html, paths.css])
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

gulp.task('clean', function () {
  return gulp.src('./build/*', {
    read: false
  })
    .pipe(clean());
});

gulp.task('watch', () => {
  gulp.watch('./app/*', ['build']);
});

gulp.task('build', ['clean', 'copy', 'bundle']);

gulp.task('default', ['watch']);
