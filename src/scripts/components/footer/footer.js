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
