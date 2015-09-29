(function($) {

	'use strict';

	// For Initialising the Size of the FlipBook on Page load.
  //window.onload = sizeContent();
  // For resetting the Size of the FlipBook on Page resize.
  //window.onresize = sizeContent();

  var container = $('.book');

	//animation for slide-pages
	$('#circle-slide').click(function() {
		$('html, body').animate({
			scrollTop: $('#slide-page')
		}, 2000);
		console.log('clicked');
	});

	//turn.js integration
	$('#flipbook').turn({
		width: $(window).outerWidth() - 30,
		height: (509 / 1418) * $(window).outerWidth() - 30,
		acceleration: true,
    gradients: !$.isTouch,
    autoCenter: true,
    elevation: 80,
    when: {
    	turned: function () {

        //Test Mashape API
        $.ajax({
          url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/Deathwing',
          type: 'GET',
          dataType: 'json',
          beforeSend: function(xhr) {
            xhr.setRequestHeader('X-Mashape-Key', '5G0t628eDbmshlFiTlaJVqPLQVNLp1adQWNjsn5o8wHnCY4Pa4');
          },
          success: function(result) {
            $('.paper-page').html('<img src=\"' + result[0].imgGold + '\" />');
          }
        });
    	}
    }
	});

	function positionBook() {
      //TODO: position book based on window size/resize
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

})(jQuery);
