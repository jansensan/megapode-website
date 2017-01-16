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

  function Controller(contactForm) {
    var vm = this;
    // properties
    vm.model = contactForm;
    vm.formModel = contactForm.formModel;
  }
  Controller.$inject = ['contactForm'];

})();
