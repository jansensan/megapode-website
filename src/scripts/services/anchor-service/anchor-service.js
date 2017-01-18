(function () {

  'use strict';

  angular
    .module('mp.services.AnchorService', [])
    .factory('anchorService', AnchorService);

  function AnchorService($window, $location, $anchorScroll) {
    var _service = {
      gotoAnchor: gotoAnchor
    };
    return _service;

    // methods definitions
    function gotoAnchor() {
      var anchorId = $window.location.hash.split('?')[0].replace('#', '');
      $location.hash(anchorId);
      $anchorScroll();
    }
  }
  AnchorService.$inject = ['$window', '$location', '$anchorScroll'];

})();
