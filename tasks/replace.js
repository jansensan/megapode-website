var config = require('../gulp-config')().replace,
  gulp = require('gulp'),
  replace = require('gulp-string-replace');


// tasks definitions
gulp.task('replace:set-as-dev', setAsDev);
gulp.task('replace:set-as-prod', setAsProd);


// methods definitions
function setAsDev() {
  gulp.src(config.prodDevToggle.src)
    .pipe(replace(/define\("IS_PROD", true\);/g, 'define("IS_PROD", false);'))
    .pipe(gulp.dest(config.prodDevToggle.dest));
}

function setAsProd() {
  gulp.src(config.prodDevToggle.src)
    .pipe(replace(/define\("IS_PROD", false\);/g, 'define("IS_PROD", true);'))
    .pipe(gulp.dest(config.prodDevToggle.dest));
}
