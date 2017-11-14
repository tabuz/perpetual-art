(function ($, window, document, undefined) {

  'use strict';

  $(function () {

  	function setHeroSize() {
    	var browserHeight = jQuery(window).height()
    	$('.hero-wrapper').css('height', browserHeight);
    	$('.hero').css('height', 0.75 * browserHeight);
    	$('.hero').css('width', 0.75 * browserHeight);
    	//$('.hero').css('left', '150px');
	}

    $(window).on('resize', function () {
    	console.log('resize');
    	setHeroSize();
	});

	setHeroSize();
  });

})(jQuery, window, document);
