(function () {

  'use strict';

  angular
    .module('mp.components.Veil', [
      'mp.resources.Templates'
    ])
    .directive('mpVeil', Directive);

  function Directive() {
    return {
      restrict: 'E',
      scope: {},
      controller: Controller,
      controllerAs: 'vm',
      templateUrl: '/components/veil/veil-template.html',
    };
  }

  function Controller($document, veilModel) {
    // vars
    var veil = $('#veil');
    var body = $('body');

    // public api
    var vm = this;
    vm.onClicked = onClicked;

    // auto activation
    activate();

    // methods definitions
    function activate() {
      veilModel.veilDisplayRequested.add(onVeilDisplayRequested);
      veilModel.veilDismissalRequested.add(onVeilDismissalRequested);
      $document.on('keydown', onKeyPressed);
    }

    function hide() {
      veilModel.isVisible = false;
      body.css('overflow', 'visible');
      veil.animate({opacity: 0}, 100, function onHidden() {
        veil.css('display', 'none');
      });
    }

    function show() {
      body.css('overflow', 'hidden');
      veil.css('display', 'block');
      veil.animate({opacity: 0.7}, 250, function onShown() {
        veilModel.isVisible = true;
      });
    }

    function onClicked() {
      veilModel.dispatchClicked();
    }

    function onKeyPressed(event) {
      if (!veilModel.isVisible) {
        return;
      }

      var escKey = 27;
      if (event.keyCode === escKey) {
        veilModel.dispatchClicked();
      }
    }

    function onVeilDisplayRequested() {
      show();
    }

    function onVeilDismissalRequested() {
      hide();
    }
  }
  Controller.$inject = ['$document', 'veilModel'];

})();
