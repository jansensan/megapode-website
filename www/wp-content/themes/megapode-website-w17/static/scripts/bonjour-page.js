(function () {

  'use strict';

  angular
    .module('mp.components.DownloadCTA', [
      'mp.resources.Templates'
    ])
    .directive('mpDownloadCta', Directive);

  function Directive() {
    return {
      restrict: 'E',
      scope: {
        devicesColor: '='
      },
      templateUrl: '/components/download-cta/download-cta-template.html',
    };
  }

})();

(function () {

  'use strict';

  angular
    .module('mp.components.Footer', [
      'mp.components.DownloadCTA',
      'mp.resources.Templates'
    ])
    .directive('mpFooter', Directive);

  function Directive() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/components/footer/footer-template.html',
    };
  }

})();

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

})();

(function () {

  'use strict';

  angular
    .module('mp.models.MenuModel', [])
    .factory('menuModel', MenuModel);

  function MenuModel() {
    var _model = {
      isVisible: false,
      // signals
      menuDisplayRequested: new signals.Signal(),
      menuDismissalRequested: new signals.Signal(),
      // methods
      dismissMenu: dismissMenu,
      requestMenu: requestMenu
    };
    return _model;

    // methods definitions
    function dismissMenu() {
      _model.menuDismissalRequested.dispatch();
    }

    function requestMenu() {
      _model.menuDisplayRequested.dispatch();
    }
  }

})();

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

  function Controller(menuModel, veilModel) {
    // public api
    var vm = this;
    vm.hide = hide;
    vm.show = show;

    // auto activation
    activate();

    // methods definitions
    function hide() {
      veilModel.dismissVeil();
      $('#mainMenu')
        .animate(
          {right: -430},  // props
          250,            // duration
          'easeInCirc',   // easing
          function onHidden() {
            menuModel.isVisible = false;
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
          function onShown() {}
        );
    }

    // private methods definitions
    function activate() {
      menuModel.menuDisplayRequested.add(onMenuDisplayRequested);
      menuModel.menuDismissalRequested.add(onMenuDismissalRequested);
      veilModel.veilClicked.add(onVeilClicked);
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
  }

})();

(function () {

  'use strict';

  angular
    .module('mp.components.Logo', [
      'mp.resources.Templates'
    ])
    .directive('mpLogo', Directive);

  function Directive() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/components/logo/logo-template.html',
    };
  }

})();

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

})();

(function () {

  'use strict';

  angular
    .module('mp.pages.BonjourPage', [
      'mp.components.Footer',
      'mp.components.Header',
      'mp.components.Menu',
      'mp.components.Veil'
    ]);

})();
