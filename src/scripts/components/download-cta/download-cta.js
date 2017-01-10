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
