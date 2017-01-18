(function () {

  'use strict';

  angular
    .module('mp.pages.BonjourPage', [
      'mp.components.Footer',
      'mp.components.Header',
      'mp.components.Menu',
      'mp.components.Veil',
      'mp.services.AnchorService'
    ])
    .controller('BonjourPageController', PageController);

  function PageController(anchorService) {
    // auto activation
    activate();

    // methods definitions
    function activate() {
      // hack: required delay otherwise doesnt work
      setTimeout(anchorService.gotoAnchor, 666);
    }
  }
  PageController.$inject = ['anchorService'];

})();
