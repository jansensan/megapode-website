(function () {

  'use strict';

  angular
    .module('mp.models.PresentationReservationModel', [])
    .factory('presentationReservationModel', PresentationReservationModel);

  function PresentationReservationModel($http) {
    // vars
    var _hasFormBeenSubmitted = false;
    var _state = 'idle';

    // public api
    var _model = {
      // properties
      formModel: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        agencyName: ''
      },
      // signals
      stateChanged: new signals.Signal(),
      // methods
      hasFormBeenSubmitted: hasFormBeenSubmitted,
      isFieldValid: isFieldValid,
      submitForm: submitForm,
      validateForm: validateForm
    };
    return _model;

    // methods definitions
    function hasFormBeenSubmitted() {
      return _hasFormBeenSubmitted;
    }

    function isFieldValid(field) {
      var isValid;
      if (!_hasFormBeenSubmitted) {
        isValid = true;
      } else {
        isValid = field.$valid;
      }
      return isValid;
    }

    function submitForm() {
      setState('pending');

      var url = 'wp-content/themes/megapode-website-w17/services/reserve-presentation.php';
      var data = _model.formModel;
      var config = {
        headers : {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
      };
      $http.post(url, data, config)
        .then(
          function onSubmitted() {
            setState('success');
            setState('idle');
          }, 
          function onFailedToSubmit() {
            setState('error');
            setState('idle');
          }
        );
    }

    function validateForm(form) {
      _hasFormBeenSubmitted = true;
      return form.$valid;
    }

    // private methods definitions
    function setState(value) {
      _state = value;
      _model.stateChanged.dispatch({
        state: _state
      });
    }
  }
  PresentationReservationModel.$inject = ['$http'];

})();
