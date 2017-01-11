(function () {

  'use strict';

  angular
    .module('mp.models.MenuModel', [])
    .factory('menuModel', MenuModel);

  function MenuModel() {
    var _model = {
      isVisible: false,
      // signals
      menuDisplayRequested: new signals.Signal(),
      menuDismissalRequested: new signals.Signal(),
      // methods
      dismissMenu: dismissMenu,
      requestMenu: requestMenu
    };
    return _model;

    // methods definitions
    function dismissMenu() {
      _model.menuDismissalRequested.dispatch();
    }

    function requestMenu() {
      _model.menuDisplayRequested.dispatch();
    }
  }

})();
