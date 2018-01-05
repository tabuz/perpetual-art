import {create_component} from '../../../component_helpers.js';
import template from './hero.ractive.html';

create_component('hero', {
    template,
    oncomplete() {
        set_hero_dimensions();
        $(window).on('resize', function () {
            set_hero_dimensions();
        });
        setTimeout (function () {
            console.log('out');
            console.log(app);
            app.show_page('home');
        }, 3000);
    },
});

function set_hero_dimensions () {
    var browserHeight = jQuery(window).height();
    var browserWidth = jQuery(window).width();

    $('.hero-wrapper').css('height', (browserHeight));
    $('.hero').css('height', (0.75 * browserWidth));
    $('.hero').css('width', (0.75 * browserWidth));

    var wrapperHeight = Number(
        $('.hero-wrapper').css('height').replace('px', '')
    );
    var heroHeight = Number($('.hero').css('height').replace('px', ''));

    $('.hero-container').css('padding-top', (wrapperHeight - heroHeight) / 2);
}
