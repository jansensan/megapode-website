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

  function Controller($document, menuModel, veilModel) {
    // vars
    var container, lastItem;

    // public api
    var vm = this;
    vm.getTabIndex = getTabIndex;
    vm.hide = hide;
    vm.show = show;

    // auto activation
    activate();

    // methods definitions
    function getTabIndex() {
      var tabIndex;
      if (menuModel.isVisible) {
        tabIndex = 0;
      } else {
        tabIndex = -1;
      }
      return tabIndex;
    }

    function hide() {
      veilModel.dismissVeil();
      $('#mainMenu')
        .animate(
          {right: -430},  // props
          250,            // duration
          'easeInCirc',   // easing
          function onHidden() {
            menuModel.isVisible = false;
            $('#mainMenuButton').focus();
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
          function onShown() {
            setFocusToContainer();
          }
        );
    }

    // private methods definitions
    function activate() {
      // set references
      container = $('#mainMenu');
      lastItem = $('#mainMenuLastItem');

      // add listeners
      menuModel.menuDisplayRequested.add(onMenuDisplayRequested);
      menuModel.menuDismissalRequested.add(onMenuDismissalRequested);
      veilModel.veilClicked.add(onVeilClicked);
      $document.on('keydown', onKeyPressed);
    }

    function isContainerFocused() {
      return document.activeElement === container[0];
    }

    function isLastItemFocused() {
      return document.activeElement === lastItem[0];
    }

    function onKeyPressed(event) {
      if (!menuModel.isVisible) {
        return;
      }

      if (event.keyCode === 9) { // tab
        if (!event.shiftKey) {
          // forward tabbing
          if (isLastItemFocused()) {
            // trap focus
            event.preventDefault();
            event.stopPropagation();
            setFocusToContainer();
          }
        } else {
          // backwards tabbing
          if (isContainerFocused()) {
            // trap focus
            event.preventDefault();
            event.stopPropagation();
            setFocusToLastItem();
          }
        }
      }
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

    function setFocusToContainer() {
      container.focus();
    }

    function setFocusToLastItem() {
      lastItem.focus();
    }
  }
  Controller.$inject = ['$document', 'menuModel', 'veilModel'];

})();
