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

      $('.hero-wrapper').css('height', (browserHeight));
      $('.hero').css('height', (0.75 * browserWidth));
      $('.hero').css('width', (0.75 * browserWidth));

      var wrapperHeight = Number($('.hero-wrapper').css('height').replace('px', ''));
      var heroHeight = Number($('.hero').css('height').replace('px', ''));

      $('.hero-container').css('margin-top', (wrapperHeight - heroHeight)/2);
    }

    function setElementsWidth() {
      console.log($('.nav-wrapper.container').css('width'), $('.home-caption'));
      $('.wrapper').css('width', $('.nav-wrapper.container').css('width'));
      $('.home-caption').css('width', $('.nav-wrapper ul').css('width'));
    }

    $(window).on('resize', function () {
    	setHeroSize();
      setElementsWidth();});

      setHeroSize();
      setElementsWidth();
  });

})(jQuery, window, document);


// Reveal on scrool
//
// $(window).scroll(function() {
//     var $falseHeader = $('.hero-wrapper'),
//         $heroMask = $('#hero-mask');
//     var $shadower = $('.hero-wrapper');
//     var wScroll = $(this).scrollTop();
//     var headScroll = (-wScroll / 4 );
//     var faderScroll = (wScroll / 900);
//     var fadeToColor = Math.min(faderScroll, 1);
//     $heroMask.css('filter', 'invert(' + fadeToColor + ')');
//     $shadower.css('background-color', 'rgba(0,0,0,' + fadeToColor + ')');

// });