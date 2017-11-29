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

            $('.hero-container').css('padding-top', (wrapperHeight - heroHeight)/2);
        }

        function setElementsWidth() {
            $('.home').css('height', $(window).height());
            $('.wrapper').css('width', $('.nav-wrapper.container').css('width'));
            $('.home-caption').css('width', $('.nav-wrapper ul').css('width'));
            $('.home-icons').css('width', $('.nav-wrapper ul').css('width'));
        }

        $(window).on('load', function () {
            
        });
        $(window).on('resize', function () {
        	setHeroSize();
            setElementsWidth();});

        $('nav a').on('click', function () {
            $('nav a').removeClass('active');
            $(this).addClass('active');
        });
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

// $(function(){
//     var fired = false;
//     $(window).scroll(function(){
//         if($(this).scrollTop()>= 1 && fired === false){
//             $('html, body').animate({
//                 scrollTop: $('#home').offset().top
//             }, 800);
//             fired = true;
//         }
//     });
// });

// $(document).on('wheel', function(e){
//     $(document).bind("mousewheel", function() {
//         return false;
//     });
//     if(e.originalEvent.deltaY > 0 && fired === false) {

//         fired = true;
//         $('html, body').animate({
//             scrollTop: $('#home').offset().top
//         }, 1000);
            
//     }
// });