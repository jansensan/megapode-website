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
