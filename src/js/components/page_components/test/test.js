import {create_component} from '../../../component_helpers.js';
import template from './test.ractive.html';

create_component('test', {
    template,
    oninit() {
    	this.set('test', 'dziala');
    	this.set('template', template);
    }
});
