(function () {

  'use strict';

  angular
    .module('mp.models.HomePageModel', [])
    .factory('homePageModel', HomePageModel);

  function HomePageModel() {
    var _model = {};
    return _model;
  }

})();

(function () {

  'use strict';

  angular
    .module('mp.pages.HomePage', [
      // models
      'mp.models.HomePageModel',
      // components
      'mp.components.Footer',
      'mp.components.Header',
      'mp.components.HomeBanner',
      'mp.components.PresentationReservationForm'
    ]);

})();

(function () {

  'use strict';

  angular
    .module('mp.components.HomeBanner', [
      'mp.components.DownloadCTA',
      'mp.resources.Templates'
    ])
    .directive('mpHomeBanner', Directive);

  function Directive() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/pages/home/banner/home-banner-template.html',
    };
  }

})();

(function () {

  'use strict';

  angular
    .module('mp.components.PresentationReservationForm', [
      'mp.resources.Templates'
    ])
    .directive('mpPresentationReservationForm', Directive);

  function Directive() {
    return {
      restrict: 'E',
      controller: Controller,
      controllerAs: 'vm',
      scope: {},
      templateUrl: '/pages/home/presentation-reservation-form/presentation-reservation-form-template.html',
    };
  }

  function Controller() {
    var vm = this;
    vm.submitForm = submitForm;

    function submitForm() {
      console.log('submitForm');
    }
  }

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
