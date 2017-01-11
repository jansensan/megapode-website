(function () {

  'use strict';

  angular
    .module('mp.components.Menu', [
      'mp.components.Logo',
      'mp.models.MenuModel',
      'mp.models.VeilModel',
      'mp.resources.Templates'
    ])
    .directive('mpMenu', Directive);

  function Directive() {
    return {
      restrict: 'E',
      controller: Controller,
      controllerAs: 'vm',
      scope: {},
      templateUrl: '/components/menu/menu-template.html',
    };
  }

  function Controller(menuModel, veilModel) {
    // public api
    var vm = this;
    vm.hide = hide;
    vm.show = show;

    // auto activation
    activate();

    // methods definitions
    function hide() {
      veilModel.dismissVeil();
      $('#mainMenu')
        .animate(
          {right: -430},  // props
          250,            // duration
          'easeInCirc',   // easing
          function onHidden() {
            menuModel.isVisible = false;
          }
        );
    }

    function show() {
      menuModel.isVisible = true;
      veilModel.requestVeil();
      $('#mainMenu')
        .animate(
          {right: 0},     // props
          500,            // duration
          'easeOutCirc',  // easing
          function onShown() {}
        );
    }

    // private methods definitions
    function activate() {
      menuModel.menuDisplayRequested.add(onMenuDisplayRequested);
      menuModel.menuDismissalRequested.add(onMenuDismissalRequested);
      veilModel.veilClicked.add(onVeilClicked);
    }

    function onMenuDisplayRequested() {
      show();
    }

    function onMenuDismissalRequested() {
      hide();
    }

    function onVeilClicked() {
      if (!menuModel.isVisible) {
        return;
      }
      hide();
    }
  }

})();
