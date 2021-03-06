var config = require('../gulp-config')().styles,
  gulp = require('gulp'),
  glp = require('gulp-load-plugins')({lazy: true});


// tasks definitions
gulp.task('styles:home-page:dev', compileDevHomePage);
gulp.task('styles:bonjour-page:dev', compileDevBonjourPage);
gulp.task('styles:regions-dispo-page:dev', compileDevRegionsDispoPage);
gulp.task('styles:nous-joindre-page:dev', compileDevNousJoindrePage);
gulp.task('styles:megapode-page:dev', compileDevMegapodePage);


// methods definitions
function compileDevStyles(src, dest) {
  return gulp
    .src(src)
    .pipe(glp.plumber(
      function (error) {
        console.error(error);
      }
    ))
    .pipe(glp.less())
    .pipe(gulp.dest(dest));
}

function compileDevHomePage() {
  return compileDevStyles(
    config.src.homePage,
    config.dest
  );
}

function compileDevBonjourPage() {
  return compileDevStyles(
    config.src.bonjourPage,
    config.dest
  );
}

function compileDevRegionsDispoPage() {
  return compileDevStyles(
    config.src.regionsDisposPage,
    config.dest
  );
}

function compileDevNousJoindrePage() {
  return compileDevStyles(
    config.src.nousJoindrePage,
    config.dest
  );
}

function compileDevMegapodePage() {
  return compileDevStyles(
    config.src.megapodePage,
    config.dest
  );
}
