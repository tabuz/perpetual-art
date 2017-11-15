/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
  	
   	function setHeroSize() {
    	var browserHeight = jQuery(window).height();
    	var browserWidth = jQuery(window).width();

    	$('.hero-wrapper').css('height', (browserHeight - 130));
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
