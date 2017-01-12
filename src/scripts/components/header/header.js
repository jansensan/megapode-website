(function () {

  'use strict';

  angular
    .module('mp.components.Header', [
      'mp.components.Logo',
      'mp.models.MenuModel',
      'mp.resources.Templates'
    ])
    .directive('mpHeader', Directive);

  function Directive() {
    return {
      restrict: 'E',
      controller: Controller,
      controllerAs: 'vm',
      scope: {},
      templateUrl: '/components/header/header-template.html',
    };
  }

  function Controller(menuModel) {
    // public api
    var vm = this;
    vm.requestMenu = menuModel.requestMenu;
  }
  Controller.$inject = ['menuModel'];

})();
