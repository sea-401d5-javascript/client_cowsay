'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const clean = require('gulp-clean');

const paths = {
  js: __dirname + '/app/client.js',
  html: __dirname + '/app/index.html',
  css: __dirname + '/css/style.css'
};

gulp.task('clean-build', () => {
  return gulp.src('./build/*.js')
  .pipe(clean());
});

gulp.task('copy', () => {
  gulp.src(paths.html)
  gulp.src(paths.css)
  .pipe(gulp.dest('./build'));
});

// gulp.task('copyCss', () => {
//   .pipe(gulp.dest('./build'));
// });

gulp.task('bundle', () => {
  gulp.src(paths.js)
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('build', ['clean-build', 'copy', 'bundle']);

gulp.task('watch', () => {
  gulp.watch(paths, ['clean-build', 'copy', 'bundle', 'build']);
});

gulp.task('default', ['clean-build', 'copy', 'bundle', 'build'], () => {
  console.log('REALLY!?!?!? OK!!');
});
