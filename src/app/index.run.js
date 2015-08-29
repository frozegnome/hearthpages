(function() {
  'use strict';

  angular
    .module('hearthpages')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
