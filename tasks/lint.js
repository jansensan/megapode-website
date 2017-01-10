var config = require('../gulp-config')().lint,
  gulp = require('gulp'),
  eslint = require('gulp-eslint');

// tasks definitions
gulp.task('lint', lint);

// methods definitions
function lint() {
  return gulp
    .src(config.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}