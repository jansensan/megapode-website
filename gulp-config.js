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
        srcScriptDir + 'pages/bonjour/**/*.js'
      ],
      regionsDispo: [
        globalComponents,
        srcScriptDir + 'pages/regions-dispo/**/*.js'
      ],
      commentUtiliser: [
        globalComponents,
        srcScriptDir + 'pages/comment-utiliser/**/*.js'
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
          commentUtiliser: {
            dev: scripts.app.commentUtiliser,
            prod: [
              devScriptDir + templatesFileName,
              devScriptDir + 'comment-utiliser-page.js'
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
          devScriptDir + 'comment-utiliser-page.js'
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
        bonjourPage: srcDir + 'styles/site/bonjour-page.less',
        regionsDisposPage: srcDir + 'styles/site/regions-dispo-page.less',
        commentUtiliserPage: srcDir + 'styles/site/comment-utiliser-page.less'
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
