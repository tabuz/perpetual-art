import * as utils from './components/page_components/utils.js';

Ractive.defaults.adapt = ['Ractive'];

export const BaseComponent = Ractive.extend({

    navigate(url) {
        app.navigate(url);
    },

});

export const components = {};

export function create_component(name, configuration) {
    let initial_data = configuration.data;
    let get_initial_data;

    if (initial_data instanceof Function) {
        get_initial_data = initial_data;
    }
    else {
        get_initial_data = () => (initial_data || {});
    }

    components[name] = BaseComponent.extend(utils.merge(configuration, {
        isolated: true,
        components,
        data() {
            return utils.merge(get_initial_data(), {app});
        }
    }));
    BaseComponent.components[name] = components[name];
}

export function partials() {
    return Object.keys(components)
        .map(name => `{{#partial ${name}}}<${name} />{{/partial}}`)
        .join('\n');
}