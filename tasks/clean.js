var config = require('../gulp-config')().clean,
  gulp = require('gulp'),
  del = require('del');


// tasks definitions
gulp.task('clean:dev-dir', cleanDevDir);
gulp.task('clean:theme-scripts-dir', cleanThemeScriptsDir);
gulp.task('clean:theme-styles-dir', cleanThemeStylesDir);


// methods definitions
function cleanDevDir(done) {
  return del(config.devDir, done);
}

function cleanThemeScriptsDir(done) {
  return del(config.themeScriptsDir, done);
}

function cleanThemeStylesDir(done) {
  return del(config.themeStylesDir, done);
}
