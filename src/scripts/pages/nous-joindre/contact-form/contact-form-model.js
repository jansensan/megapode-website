(function () {

  'use strict';

  angular
    .module('mp.models.ContactFormModel', [])
    .factory('contactForm', ContactForm);

  function ContactForm() {
    // public api
    var _model = {
      // properties
      formModel: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      },
      // methods
      submitForm: submitForm
    };
    return _model;

    // methods definitions
    function submitForm() {

    }
  }
  // ContactForm.$inject = ['$http'];

})();
