(function () {

  'use strict';

  angular
    .module('mp.pages.HomePage', [
      // models
      'mp.models.HomePageModel',
      // components
      'mp.components.Footer',
      'mp.components.Header',
      'mp.components.HomeBanner',
      'mp.components.PresentationReservationForm'
    ]);

})();
