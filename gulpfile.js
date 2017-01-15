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
gulp.task('build', build);


// tasks definitions
function dev() {
  runSequence(
    'clean:dev-dir',
    'clean:theme-scripts-dir',
    'clean:theme-styles-dir',
    // linting
    'lint',
    // styles
    'styles:home-page:dev',
    'styles:bonjour-page:dev',
    'styles:regions-dispo-page:dev',
    'styles:comment-utiliser-page:dev',
    'copy:vendor-styles:dev',
    // scripts
    'template-cache:dev',
    'build:vendors:dev',
    'build:home-page:dev',
    'build:bonjour-page:dev',
    'build:regions-dispo-page:dev',
    'build:comment-utiliser-page:dev',
    // deploy to theme directory
    'copy:scripts:dev',
    // ensure wp functions.php is set as dev
    'replace:set-as-dev',
    // watch files
    'watch:src'
  );
}

function build() {
  runSequence(
    'clean:dev-dir',
    'clean:theme-scripts-dir',
    'clean:theme-styles-dir',
    // linting
    'lint',
    // styles
    'styles:home-page:dev',
    'styles:bonjour-page:dev',
    'styles:regions-dispo-page:dev',
    'styles:comment-utiliser-page:dev',
    'copy:vendor-styles:dev',
    // scripts
    'template-cache:dev',
    'build:vendors:dev',
    'build:home-page:dev',
    'build:bonjour-page:dev',
    'build:regions-dispo-page:dev',
    'build:comment-utiliser-page:dev',
    // deploy to theme directory
    'build:vendors',
    'build:home-page',
    'build:bonjour-page',
    'build:regions-dispo-page',
    'build:comment-utiliser-page',
    // ensure wp functions.php is set as dev
    'replace:set-as-prod',
    // clean after yourself
    'clean:dev-dir'
  );
}