var config = require('./gulp-config')(),
  gulp = require('gulp'),
  requireDir = require('require-dir'),
  runSequence = require('run-sequence'),
  glp = require('gulp-load-plugins')({lazy: true});


// require tasks directory
requireDir('./tasks', {recurse: true});


// tasks
gulp.task('help', glp.taskListing);
gulp.task('default', ['help']);
gulp.task('dev', dev);


// tasks definitions
function dev() {
  runSequence(
    // linting
    'lint',
    // styles
    'styles:home-page:dev',
    'styles:bonjour-page:dev',
    'styles:regions-dispo-page:dev',
    'copy:vendor-styles:dev',
    // app
    'template-cache:dev',
    'build:vendors:dev',
    'build:home-page:dev',
    'build:bonjour-page:dev',
    'build:regions-dispo-page:dev',
    // 'clean:template-cache'
    'copy:scripts:dev',
    'watch:src'
  );
}