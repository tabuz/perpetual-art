import {create_component} from '../../../component_helpers.js';
import template from './booking.ractive.html';

create_component('booking', {
    template,
    oncomplete() {
        set_booking_dimentions();
        $(window).on('resize', function () {
            set_booking_dimentions();
        });
    },
});

function set_booking_dimentions() {
    $('main').css('height', $(window).height() - $('nav').height());
}