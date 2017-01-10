var config = require('../gulp-config')().copy,
  gulp = require('gulp');


// tasks definitions
gulp.task('copy:vendor-styles:dev', copyDevVendorStyles);
gulp.task('copy:scripts:dev', copyDevScripts);


// methods definitions
function copyDevVendorStyles() {
  return gulp
    .src(config.src.stylesheets.vendors)
    .pipe(gulp.dest(config.dest.stylesheets));
}

function copyDevScripts() {
  return gulp
    .src(config.src.scripts)
    .pipe(gulp.dest(config.dest.scripts));
}
