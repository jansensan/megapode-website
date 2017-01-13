(function () {

  'use strict';

  angular
    .module('mp.components.PresentationReservationForm', [
      'mp.models.PresentationReservationModel',
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

  function Controller(presentationReservationModel) {
    var vm = this;
    // properties
    vm.model = presentationReservationModel;
    vm.formModel = presentationReservationModel.formModel;
    vm.isServicePending = false;
    vm.isServiceErrorVisible = false;
    vm.isServiceSuccessVisible = false;
    // methods
    vm.isErrorMessageVisible = isErrorMessageVisible;
    vm.isFieldValid = presentationReservationModel.isFieldValid;
    vm.submitForm = presentationReservationModel.submitForm;
    vm.validateForm = presentationReservationModel.validateForm;

    // auto activation
    activate();

    // methods definitions
    function isErrorMessageVisible(form) {
      return presentationReservationModel.hasFormBeenSubmitted() && !form.$valid;
    }

    // private methods definitions
    function activate() {
      presentationReservationModel.stateChanged.add(onModelStateChanged);
    }

    function onModelStateChanged(signal) {
      switch (signal.state) {
        case 'pending':
          vm.isServicePending = true;
          vm.isServiceErrorVisible = false;
          vm.isServiceSuccessVisible = false;
          break;
        case 'success':
          vm.isServicePending = false;
          vm.isServiceErrorVisible = false;
          vm.isServiceSuccessVisible = true;
          break;
        case 'error':
          vm.isServicePending = false;
          vm.isServiceSuccessVisible = false;
          vm.isServiceErrorVisible = true;
          break;
        case 'idle':
          break;
      }
    }
  }
  Controller.$inject = ['presentationReservationModel'];

})();
