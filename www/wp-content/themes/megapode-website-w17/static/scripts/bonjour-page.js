(function () {

  'use strict';

  angular
    .module('mp.pages.BonjourPage', [
      'mp.components.Footer',
      'mp.components.Header'
    ]);

})();

(function () {

  'use strict';

  angular
    .module('mp.components.Logo', [
      'mp.resources.Templates'
    ])
    .directive('mpLogo', Directive);

  function Directive() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/components/logo/logo-template.html',
    };
  }

})();

(function () {

  'use strict';

  angular
    .module('mp.components.DownloadCTA', [
      'mp.resources.Templates'
    ])
    .directive('mpDownloadCta', Directive);

  function Directive() {
    return {
      restrict: 'E',
      scope: {
        devicesColor: '='
      },
      templateUrl: '/components/download-cta/download-cta-template.html',
    };
  }

})();

(function () {

  'use strict';

  angular
    .module('mp.components.Header', [
      'mp.components.Logo',
      'mp.resources.Templates'
    ])
    .directive('mpHeader', Directive);

  function Directive() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/components/header/header-template.html',
    };
  }

})();

(function () {

  'use strict';

  angular
    .module('mp.components.Footer', [
      'mp.components.DownloadCTA',
      'mp.resources.Templates'
    ])
    .directive('mpFooter', Directive);

  function Directive() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/components/footer/footer-template.html',
    };
  }

})();
