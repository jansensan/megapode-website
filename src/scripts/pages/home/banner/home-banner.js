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
