import {create_component} from '../../../component_helpers.js';
import template from './photo.ractive.html';

create_component('photo', {
    template,
    oninit() {
    	this.set('photo', 'dziala');
    	this.set('template', template);
    }
});
