const gulp = require('gulp');
const webpack = require('webpack-stream');

const paths = {
  js: __dirname + '/app/script.js',
  html: __dirname + '/app/index.html',
  css: __dirname + '/app/style.css'
};

gulp.task('copy', ()=> {
  gulp.src([paths.html,paths.css])
  .pipe(gulp.dest('./build'));
});

gulp.task('bundle', ()=> {
  gulp.src(paths.js)
  .pipe(webpack({
    output: {
      filename:'bundle.js'
    }
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('build', ['copy','bundle']);
gulp.watch([paths.js, paths.html, paths.css], 'build');
