(function () {

  'use strict';

  angular
    .module('mp.components.HomeBanner', [
      'mp.components.DownloadCTA',
      'mp.resources.Templates'
    ])
    .directive('mpHomeBanner', Directive);

  function Directive() {
    return {
      restrict: 'E',
      scope: {},
      controller: Controller,
      templateUrl: '/pages/home/banner/home-banner-template.html',
    };
  }

  function Controller() {
    var plan = $('#hoveringPlan');
    var shadow = $('#hoveringPlanShadow');
    var animDuration = 2000;
    var animEasing = 'easeInOutCubic';

    // auto activation
    activate();

    // methods definitions
    function activate() {
      slideUp();
    }

    function slideUp() {
      plan.animate(
        {top: '100px'},
        animDuration,
        animEasing,
        slideDown
      );
      shadow.animate(
        {
          opacity: 0.8
        },
        animDuration,
        animEasing
      );
    }

    function slideDown() {
      plan.animate(
        {top: '120px'},
        animDuration,
        animEasing,
        slideUp
      );
      shadow.animate(
        {
          opacity: 1
        },
        animDuration,
        animEasing
      );
    }
  }

})();
