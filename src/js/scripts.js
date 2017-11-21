(function ($, window, document, undefined) {

  'use strict';

  $(function () {
  	
   	function setHeroSize() {
    	var browserHeight = jQuery(window).height();
    	var browserWidth = jQuery(window).width();

    	$('.hero-wrapper').css('height', (browserHeight));
    	$('.hero').css('height', (0.75 * browserWidth));
    	$('.hero').css('width', (0.75 * browserWidth));

    	var wrapperHeight = Number($('.hero-wrapper').css('height').replace('px', ''));
    	var heroHeight = Number($('.hero').css('height').replace('px', ''));

    	$('.hero-container').css('margin-top', (wrapperHeight - heroHeight)/2);
	}

    $(window).on('resize', function () {
    	setHeroSize();
	});

	setHeroSize();
  });

})(jQuery, window, document);
