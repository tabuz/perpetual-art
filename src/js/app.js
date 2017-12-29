import {
    BaseComponent,
    components,
    create_component,
    partials,
} from './component_helpers.js';
import {create_router} from './routing.js';

import './components/page_components/test/test.js';
import './components/page_components/photo/photo.js';


export let router;

const app_initial_data = {
    loading: true,
};

window.app = null;

window.create_app = () => {

    const app = new BaseComponent({
        template: `
            ${partials()}
            {{#if current_page}}
                {{>.current_page}}
            {{/if}}
        `,
        components,
        data() {},
        computed: {},
        test_method() {
        	console.log('Test successfull ; )');
        },
        current_page() {
            return this.findComponent(this.get('current_page'));
        },
        show_page(current_page, data = {}) {
            let initialised;

            const instance = app.findComponent(current_page);
            if (instance) {
                initialised = instance.set(data);
            }
            else {
                const component = app.components[current_page];
                if (component) {
                    component.component_initial_options = data;
                }
                initialised = app.set({current_page, loading: false});
            }
            return initialised.then(() => {
                console.log('current-page', current_page)
                return app.findComponent(current_page);
            });
        },
        show_error(message) {
            app.set({
                app_error: true,
                app_error_msg: message,
            });
        },
        navigate(url) {
            if (router) {
                router.setRoute(url);
            }
        },
    });

    window.app = app;
    app.render('#page');

    router = create_router(app);
    app.router = router;

    console.log('Finished app initialization ');
};