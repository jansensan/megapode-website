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
    themeName = 'megapode-website-w17';
    themeDir = distDir + 'wp-content/themes/' + themeName + '/',
    themeStaticDir = themeDir + 'static/',
    themeScriptsDir = themeStaticDir + 'scripts/',
    themeStylesDir = themeStaticDir + 'styles/',

    devServer = 'dev.megapode.ca',
    prodServer = 'megapode.ca';


  var globalComponents = srcComponentsDir + '**/*.js'
  var scripts = {
    sources: srcDir + 'scripts/',
    app: {
      home: [
        globalComponents,
        srcScriptDir + 'pages/home/**/*.js'
      ],
      bonjour: [
        globalComponents,
        srcScriptDir + 'services/**/*.js',
        srcScriptDir + 'pages/bonjour/**/*.js'
      ],
      regionsDispo: [
        globalComponents,
        srcScriptDir + 'pages/regions-dispo/**/*.js'
      ],
      nousJoindre: [
        globalComponents,
        srcScriptDir + 'pages/nous-joindre/**/*.js'
      ],
      megapodePage: [
        globalComponents,
        srcScriptDir + 'pages/megapode-page/**/*.js'
      ]
    },
    vendors: [
      npmDir + 'jquery/dist/jquery.js',
      npmDir + 'jquery.easing/jquery.easing.js',
      npmDir + 'angular/angular.js',
      npmDir + 'signals/dist/signals.js'
    ]
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
          },
          regionsDispo: {
            dev: scripts.app.regionsDispo,
            prod: [
              devScriptDir + templatesFileName,
              devScriptDir + 'regions-dispo-page.js'
            ]
          },
          nousJoindre: {
            dev: scripts.app.nousJoindre,
            prod: [
              devScriptDir + templatesFileName,
              devScriptDir + 'nous-joindre-page.js'
            ]
          },
          megapodePage: {
            dev: scripts.app.megapodePage,
            prod: [
              devScriptDir + templatesFileName,
              devScriptDir + 'megapode-page.js'
            ]
          }
        },
        vendors: scripts.vendors
      },
      dest: {
        dev: devScriptDir,
        prod: themeScriptsDir
      }
    },
    clean: {
      devDir: devDir,
      themeScriptsDir: themeScriptsDir,
      themeStylesDir: themeStylesDir
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
          devScriptDir + 'bonjour-page.js',
          devScriptDir + 'regions-dispo-page.js',
          devScriptDir + 'nous-joindre-page.js',
          devScriptDir + 'megapode-page.js' // for generic page wp template
        ]
      },
      dest: {
        stylesheets: themeStylesDir,
        scripts: themeScriptsDir
      }
    },
    deploy: {
      target: {
        dev: devServer,
        prod: prodServer
      },
      theme: {
        dir: themeDir,
        src: themeDir + '**/*',
        dest: {
          dev: devServer + '/wp-content/themes/' + themeName + '/',
          prod: prodServer + '/wp-content/themes/' + themeName + '/'
        }
      }
    },
    lint: {
      src: srcDir + '**/*.js'
    },
    replace: {
      prodDevToggle: {
        src: themeDir + 'functions.php',
        dest: themeDir
      }
    },
    styles: {
      src: {
        homePage: srcDir + 'styles/site/home-page.less',
        bonjourPage: srcDir + 'styles/site/bonjour-page.less',
        regionsDisposPage: srcDir + 'styles/site/regions-dispo-page.less',
        nousJoindrePage: srcDir + 'styles/site/nous-joindre-page.less',
        megapodePage: srcDir + 'styles/site/megapode-page.less'
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
