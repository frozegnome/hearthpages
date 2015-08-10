(function() {

	'use strict';

	// For Initialising the Size of the FlipBook on Page load.
  //window.onload = sizeContent();
  // For resetting the Size of the FlipBook on Page resize.
  //window.onresize = sizeContent();

  var container = $('.book');

	$(document).ready(function() {

		//animation for slide-pages
		$('#circle-slide').click(function() {
			$('html, body').animate({
				scrollTop: $('#slide-page')
			}, 2000);
			console.log('clicked');
		});
console.log($(window).outerWidth());
		//turn.js integration
		$('#flipbook').turn({
			width: $(window).outerWidth() - 30,
			height: (509 / 1418) * $(window).outerWidth() - 30,
			acceleration: true,
      gradients: !$.isTouch,
      autoCenter: true,
      elevation: 80,
      when: {
      	turned: function (e, page) {

      	}
      }
		});
	});

	window.onresize = function () {
      setTimeout(function () {
          //setZoomPortHeight();
          sizeFlipBook();
          //positionBook();
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
