var config = require('../gulp-config')().templateCache,
  gulp = require('gulp'),
  del = require('del'),
  glp = require('gulp-load-plugins')({lazy: true});

// tasks definitions
gulp.task('template-cache:dev', ['clean:template-cache'], writeTemplateCache);
gulp.task('clean:template-cache', cleanTemplateCache);

// methods definitions
function writeTemplateCache() {
  return gulp
    .src(config.src)
    .pipe(glp.minifyHtml({empty: true}))
    .pipe(glp.angularTemplatecache(
      config.fileName,
      config.opts
    ))
    .pipe(gulp.dest(config.dest.dev));
}

function cleanTemplateCache(done) {
  var fileToDelete = config.dest.dev.concat(config.fileName);
  return del(fileToDelete, done);
}
