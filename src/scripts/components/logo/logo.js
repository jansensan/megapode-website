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
