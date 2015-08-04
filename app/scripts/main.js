(function() {

	'use strict';

	$(document).ready(function() {

		//animation for slide-pages
		$('#circle-slide').click(function() {
			$('html, body').animate({
				scrollTop: $('#slide-page')
			}, 2000);
			console.log('clicked');
		});

		//turn.js integration
		$('#flipbook').turn({
			width: 1600,
			height: 600,
			autoCenter: true
		});
	});

})();
