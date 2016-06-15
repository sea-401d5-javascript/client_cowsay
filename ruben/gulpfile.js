const gulp = require('gulp');
const webpack = require('webpack-stream');

const paths = {
  js: __dirname + '/app/client.js',
  html: __dirname + '/app/index.html',
  css: __dirname + '/app/base.css'
};

gulp.task('copy', () => {
  gulp.src([paths.html, paths.css])
    .pipe(gulp.dest('./build'));
});

gulp.task('bundle', () => {
  gulp.src(paths.js)
    .pipe(webpack({
      output: {
        filename:'bundle.js'
      }
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', () => {
  gulp.watch('./app/index.html', ['copy']);
  gulp.watch('./app/client.js', ['bundle']);
  gulp.watch('./app/base.css', ['copy']);
});

gulp.task('build', ['copy', 'bundle']);
