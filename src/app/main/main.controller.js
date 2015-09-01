(function() {
  'use strict';

  angular
    .module('hearthpages')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1441041239450;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }

  var container = $('.book');

  $(document).ready(function() {
    //turn.js integration

    // For Initialising the Size of the FlipBook on Page load.
    //window.onload = sizeContent();
    // For resetting the Size of the FlipBook on Page resize.
    //window.onresize = sizeContent();\

    $('#flipbook').turn({
      width: $(window).outerWidth() - 30,
      height: (509 / 1418) * $(window).outerWidth() - 30,
      acceleration: true,
      gradients: !$.isTouch,
      autoCenter: true,
      elevation: 80,
      when: {
        turned: function (e, page) {
          console.log('page turned');
        }
      }
    });
  });

  function positionBook() {
      var viewPortHeight = document.getElementById('zoomView').scrollHeight;

      $('.zoom-viewport').height();
      var newTop = (viewPortHeight - $('#fbContainer').height()) / 2;

      $('#fbContainer').css('top', newTop + 'px');
  }

  window.onresize = function () {
      setTimeout(function () {
          sizeFlipBook();
          positionBook();
          if (container.turn('page') === 1) {
              var size = container.turn('size').width / 2 * -1;
              container.css({ marginLeft: size });
          }
          else {
              container.turn('center');
          }
      }, 0);
  };

  function sizeFlipBook() {
      var ratio = 509 / 1418;
      var compareRatio = 700 / 1418;
      var height = $(window).outerHeight();
      var width = $(window).outerWidth();
      if (height / width < compareRatio) {
          container.turn('size', (height - 250) / ratio, height - 250).turn('resize');
      } else {
          container.turn('size', width - 30, ratio * width - 30).turn('resize');
      }
  }
})();
