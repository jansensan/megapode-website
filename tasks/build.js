var config = require('../gulp-config')().build,
  gulp = require('gulp'),
  glp = require('gulp-load-plugins')({lazy: true});


// tasks definitions
gulp.task('build:home-page:dev', buildDevHomePage);
gulp.task('build:home-page', buildHomePage);
gulp.task('build:bonjour-page:dev', buildDevBonjourPage);
gulp.task('build:bonjour-page', buildBonjourPage);
gulp.task('build:regions-dispo-page:dev', buildDevRegionsDispoPage);
gulp.task('build:regions-dispo-page', buildRegionsDispoPage);
gulp.task('build:comment-utiliser-page:dev', buildDevCommentUtiliserPage);
gulp.task('build:comment-utiliser-page', buildCommentUtiliserPage);
gulp.task('build:vendors:dev', buildDevVendors);
gulp.task('build:vendors', buildVendors);


// methods definitions
function buildDevHomePage() {
  return gulp
    .src(config.src.app.home.dev)
    // concat files
    .pipe(glp.concat('home-page.js'))
    // output file
    .pipe(gulp.dest(config.dest.dev));
}

function buildHomePage() {
  return gulp
    .src(config.src.app.home.prod)
    // concat files
    .pipe(glp.concat('home-page.min.js'))
    // minify
    .pipe(glp.uglify())
    // output file
    .pipe(gulp.dest(config.dest.prod));
}

function buildDevBonjourPage() {
  return gulp
    .src(config.src.app.bonjour.dev)
    // concat files
    .pipe(glp.concat('bonjour-page.js'))
    // output file
    .pipe(gulp.dest(config.dest.dev));
}

function buildBonjourPage() {
  return gulp
    .src(config.src.app.regionsDispo.prod)
    // concat files
    .pipe(glp.concat('regions-dispo-page.min.js'))
    // minify
    .pipe(glp.uglify())
    // output file
    .pipe(gulp.dest(config.dest.prod));
}

function buildDevRegionsDispoPage() {
  return gulp
    .src(config.src.app.regionsDispo.dev)
    // concat files
    .pipe(glp.concat('regions-dispo-page.js'))
    // output file
    .pipe(gulp.dest(config.dest.dev));
}

function buildRegionsDispoPage() {
  return gulp
    .src(config.src.app.regionsDispo.prod)
    // concat files
    .pipe(glp.concat('regions-dispo-page.min.js'))
    // minify
    .pipe(glp.uglify())
    // output file
    .pipe(gulp.dest(config.dest.prod));
}

function buildDevCommentUtiliserPage() {
  return gulp
    .src(config.src.app.commentUtiliser.dev)
    // concat files
    .pipe(glp.concat('comment-utiliser-page.js'))
    // output file
    .pipe(gulp.dest(config.dest.dev));
}

function buildCommentUtiliserPage() {
  return gulp
    .src(config.src.app.commentUtiliser.prod)
    // concat files
    .pipe(glp.concat('comment-utiliser-page.min.js'))
    // minify
    .pipe(glp.uglify())
    // output file
    .pipe(gulp.dest(config.dest.prod));
}

function buildDevVendors() {
  return gulp
    .src(config.src.vendors.dev)
    // concat files
    .pipe(glp.concat('vendors.js'))
    // output file
    .pipe(gulp.dest(config.dest.dev));
}

function buildVendors() {
  return gulp
    .src(config.src.vendors.prod)
    // concat files
    .pipe(glp.concat('vendors.min.js'))
    // output file
    .pipe(gulp.dest(config.dest.prod));
}
