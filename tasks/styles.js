var config = require('../gulp-config')().styles,
  gulp = require('gulp'),
  glp = require('gulp-load-plugins')({lazy: true});


// tasks definitions
gulp.task('styles:home-page:dev', compileDevHomePage);


// methods definitions
function compileDevHomePage() {
  return gulp
    .src(config.src.homePage)
    .pipe(glp.plumber(
      function (error) {
        console.error(error);
      }
    ))
    .pipe(glp.less())
    .pipe(gulp.dest(config.dest));
}
