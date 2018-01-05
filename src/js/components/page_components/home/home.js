import {create_component} from '../../../component_helpers.js';
import template from './home.ractive.html';

create_component('home', {
    template,
    oncomplete() {
        set_home_dimentions();

        $(window).on('resize', function () {
            set_home_dimentions();
        });
    },
});

function set_home_dimentions() {
    $('.home').css('height', $(window).height() - $('nav').height());
    $('.wrapper').css('width', $('.nav-wrapper.container').css('width'));
    $('.home-caption').css('width', $('.nav-wrapper ul').css('width'));
    $('.home-icons').css('width', $('.nav-wrapper ul').css('width'));
}
