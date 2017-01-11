(function () {

  'use strict';

  angular
    .module('mp.models.VeilModel', [])
    .factory('veilModel', VeilModel);

  function VeilModel() {
    var _model = {
      isVisible: false,
      // signals
      veilClicked: new signals.Signal(),
      veilDisplayRequested: new signals.Signal(),
      veilDismissalRequested: new signals.Signal(),
      // methods
      dismissVeil: dismissVeil,
      dispatchClicked: dispatchClicked,
      requestVeil: requestVeil
    };
    return _model;

    // methods definitions
    function dismissVeil() {
      _model.veilDismissalRequested.dispatch();
    }

    function dispatchClicked() {
      _model.veilClicked.dispatch();
    }

    function requestVeil() {
      _model.veilDisplayRequested.dispatch();
    }
  }

})();
