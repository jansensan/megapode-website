var config = require('../gulp-config')().deploy,
  argv = require('yargs').argv,
  helper
  gulp = require('gulp'),
  GulpSSH = require('gulp-ssh'),
  fs = require('fs'),
  runSequence = require('run-sequence');

var targetEnv, targetServer, ssh;


// tasks definitions
gulp.task('deploy:dev-theme', deployDevTheme);
gulp.task('deploy:theme', deployTheme);

gulp.task('ssh:init', initSSH);
gulp.task('ssh:deploy-theme', sshDeployTheme);
gulp.task('ssh:delete-theme', sshDeleteTheme);


// methods definitions
function deployTheme() {
  if (!containsMinifiedVendors()) {
    var noBuildError = 'Unable to deploy: no build contents detected. ' +
      'Ensure to run "gulp build" before running this task.';
    throw new Error(noBuildError);
  }

  targetEnv = 'prod';
  targetServer = config.target.prod;

  runSequence(
    'ssh:init',
    'ssh:delete-theme',
    'ssh:deploy-theme'
  );
}

function deployDevTheme() {
  if (!containsMinifiedVendors()) {
    var noBuildError = 'Unable to deploy: no build contents detected. ' +
      'Ensure to run "gulp build" before running this task.';
    throw new Error(noBuildError);
  }

  targetEnv = 'dev';
  targetServer = config.target.dev;

  runSequence(
    'ssh:init',
    'ssh:delete-theme',
    'ssh:deploy-theme'
  );
}

function initSSH() {
  if (!argv.u) {
    var noUsername = 'Error initializing SSH connection: no username provided. ' +
      'Ensure you pass a username when invoking the command, e.g.: ' +
      '[command] -u usernameValue -p passwordValue';
    throw new Error(noUsername);
  }

  if (!argv.p) {
    var noPassword = 'Error initializing SSH connection: no password provided. ' +
      'Ensure you pass a password when invoking the command, e.g.: ' +
      '[command] -u usernameValue -p passwordValue';
    throw new Error(noPassword);
  }

  ssh = new GulpSSH({
    ignoreErrors: false,
    sshConfig: {
      host: targetServer,
      port: 22,
      username: argv.u,
      password: argv.p
    },
  });
}

function sshDeployTheme() {
  var dest = getThemeDest();
  return gulp
    .src(config.theme.src)
    .pipe(ssh.dest(dest));
}

function sshDeleteTheme() {
  var dest = getThemeDest();
  var command = 'rm -rf ' + dest;
  return ssh.exec([command]);
}


// private methods definitions
function containsMinifiedVendors() {
  var scriptsDir = fs.readdirSync(config.theme.dir + '/static/scripts');
  return scriptsDir.indexOf('vendors.min.js') !== -1;
}

function getThemeDest() {
  var dest;
  switch (targetEnv) {
    case 'dev':
      dest = config.theme.dest.dev;
      break;
    case 'prod':
      dest = config.theme.dest.prod;
      break;
    default:
      var wrongEnv = 'Unexpected target environment: "' + targetEnv + '". ' +
        'Only "dev" and "prod" are acceptable.';
      throw new Error(wrongEnv);
  }
  return dest;
}