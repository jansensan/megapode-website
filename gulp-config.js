module.exports = function () {
  var projectDir = process.env.PWD = process.cwd() + '/',
    npmDir = 'node_modules/',
    srcDir = 'src/',
    srcScriptDir = srcDir + 'scripts/',
    srcComponentsDir = srcScriptDir + 'components/',

    devDir = '.dev/',
    devScriptDir = devDir + 'scripts/',
    templatesFileName = 'megapode-templates.js',

    distDir = 'www/',
    themeDir = distDir + 'wp-content/themes/megapode-website-w17/',
    themeStaticDir = themeDir + 'static/',
    themeScriptsDir = themeStaticDir + 'scripts/',
    themeStylesDir = themeStaticDir + 'styles/';


  var globalComponents = [
    srcComponentsDir + 'logo/logo.js',
    srcComponentsDir + 'download-cta/download-cta.js',
    srcComponentsDir + 'header/header.js',
    srcComponentsDir + 'footer/footer.js'
  ];
  var scripts = {
    sources: srcDir + 'scripts/',
    app: {
      home: [
        srcScriptDir + 'pages/home/**/*.js'
      ].concat(globalComponents),
      bonjour: [
        srcScriptDir + 'pages/bonjour/**/*.js'
      ].concat(globalComponents)
    },
    vendors: {
      dev: [
        npmDir + 'jquery/dist/jquery.js',
        npmDir + 'jquery.easing/jquery.easing.js',
        npmDir + 'angular/angular.js',
        npmDir + 'lodash/lodash.js',
        npmDir + 'signals/dist/signals.js'
      ],
      prod: [
        npmDir + 'jquery/dist/jquery.min.js',
        npmDir + 'jquery.easing/jquery.easing.min.js',
        npmDir + 'angular/angular.min.js',
        npmDir + 'lodash/lodash.min.js',
        npmDir + 'signals/dist/signals.min.js'
      ]
    }
  };

  var pipelines = {
    build: {
      src: {
        app: {
          home: {
            dev: scripts.app.home,
            prod: [
              devScriptDir + templatesFileName,
              devScriptDir + 'home-page.js'
            ]
          },
          bonjour: {
            dev: scripts.app.bonjour,
            prod: [
              devScriptDir + templatesFileName,
              devScriptDir + 'bonjour-page.js'
            ]
          }
        },
        vendors: {
          dev: scripts.vendors.dev,
          prod: scripts.vendors.prod
        }
      },
      dest: {
        dev: devScriptDir,
        prod: themeScriptsDir
      }
    },
    clean: {
      devDir: devDir
    },
    copy: {
      src: {
        stylesheets: {
          vendors: [npmDir + 'normalize.css/normalize.css']
        },
        scripts: [
          devScriptDir + 'vendors.js',
          devScriptDir + 'megapode-templates.js',
          devScriptDir + 'home-page.js',
          devScriptDir + 'bonjour-page.js'
        ]
      },
      dest: {
        stylesheets: themeStylesDir,
        scripts: themeScriptsDir
      }
    },
    lint: {
      src: srcDir + '**/*.js'
    },
    styles: {
      src: {
        homePage: srcDir + 'styles/site/home-page.less',
        bonjourPage: srcDir + 'styles/site/bonjour-page.less'
      },
      dest: themeStylesDir
    },
    templateCache: {
      srcDir: srcDir,
      src: [
        scripts.sources.concat('**/*-template.html')
      ],
      dest: {
        dev: devScriptDir
      },
      fileName: templatesFileName,
      opts: {
        module: 'mp.resources.Templates',
        root: '/',
        standalone: true
      }
    },
    watch: {
      src: [
        srcDir + '**/*.js',
        srcDir + '**/*.less',
        srcDir + '**/*.html'
      ]
    }
  };
  return pipelines;
};
