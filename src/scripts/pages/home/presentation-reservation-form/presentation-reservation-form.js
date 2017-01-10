(function () {

  'use strict';

  angular
    .module('mp.components.PresentationReservationForm', [
      'mp.resources.Templates'
    ])
    .directive('mpPresentationReservationForm', Directive);

  function Directive() {
    return {
      restrict: 'E',
      controller: Controller,
      controllerAs: 'vm',
      scope: {},
      templateUrl: '/pages/home/presentation-reservation-form/presentation-reservation-form-template.html',
    };
  }

  function Controller() {
    var vm = this;
    vm.submitForm = submitForm;

    function submitForm() {
      console.log('submitForm');
    }
  }

})();
