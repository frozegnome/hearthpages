(function() {

	'use strict';

	$(document).ready(function() {

		//animation for slide-pages
		$('#circle-slide').on('click', function() {
			$('body').scrollTo('#slide-page');
		});

		$('#flipbook').turn({
			width: 400,
			height: 300,
			autoCenter: true
		});
	});

})();
