(function () {

  'use strict';

  angular
    .module('mp.components.ContactForm', [
      'mp.models.ContactFormModel',
      'mp.resources.Templates'
    ])
    .directive('mpContactForm', Directive);

  function Directive() {
    return {
      restrict: 'E',
      controller: Controller,
      controllerAs: 'vm',
      scope: {},
      templateUrl: '/pages/nous-joindre/contact-form/contact-form-template.html',
    };
  }

  function Controller(contactFormModel) {
    var vm = this;
    // properties
    vm.model = contactFormModel;
    vm.formModel = contactFormModel.formModel;
    vm.isServicePending = false;
    vm.isServiceErrorVisible = false;
    vm.isServiceSuccessVisible = false;
    // methods
    vm.isErrorMessageVisible = isErrorMessageVisible;
    vm.isFieldValid = contactFormModel.isFieldValid;
    vm.submitForm = contactFormModel.submitForm;
    vm.validateForm = contactFormModel.validateForm;

    // auto activation
    activate();

    // methods definitions
    function isErrorMessageVisible(form) {
      return contactFormModel.hasFormBeenSubmitted() && !form.$valid;
    }

    // private methods definitions
    function activate() {
      contactFormModel.stateChanged.add(onModelStateChanged);
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
  Controller.$inject = ['contactFormModel'];

})();
