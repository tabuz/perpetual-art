import {create_component} from '../../../component_helpers.js';
import template from './navigation.ractive.html';

create_component('navigation', {
    template,
    oncomplete() {
        $('nav a').on('click', function () {
            $('nav a').removeClass('active');
            $(this).addClass('active');
        });
    }
});
