/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.router = undefined;

	var _component_helpers = __webpack_require__(2);

	var _routing = __webpack_require__(4);

	__webpack_require__(5);

	__webpack_require__(7);

	var router = exports.router = void 0;

	var app_initial_data = {
	    loading: true
	};

	window.app = null;

	window.create_app = function () {

	    var app = new _component_helpers.BaseComponent({
	        template: '\n            ' + (0, _component_helpers.partials)() + '\n            {{#if current_page}}\n                {{>.current_page}}\n            {{/if}}\n        ',
	        components: _component_helpers.components,
	        data: function data() {},

	        computed: {},
	        test_method: function test_method() {
	            console.log('Test successfull ; )');
	        },
	        current_page: function current_page() {
	            return this.findComponent(this.get('current_page'));
	        },
	        show_page: function show_page(current_page) {
	            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            var initialised = void 0;

	            var instance = app.findComponent(current_page);
	            if (instance) {
	                initialised = instance.set(data);
	            } else {
	                var component = app.components[current_page];
	                if (component) {
	                    component.component_initial_options = data;
	                }
	                initialised = app.set({ current_page: current_page, loading: false });
	            }
	            return initialised.then(function () {
	                console.log('current-page', current_page);
	                return app.findComponent(current_page);
	            });
	        },
	        show_error: function show_error(message) {
	            app.set({
	                app_error: true,
	                app_error_msg: message
	            });
	        },
	        navigate: function navigate(url) {
	            if (router) {
	                router.setRoute(url);
	            }
	        }
	    });

	    window.app = app;
	    app.render('#page');

	    exports.router = router = (0, _routing.create_router)(app);
	    app.router = router;

	    console.log('Finished app initialization ');
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.components = exports.BaseComponent = undefined;
	exports.create_component = create_component;
	exports.partials = partials;

	var _utils = __webpack_require__(3);

	var utils = _interopRequireWildcard(_utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	Ractive.defaults.adapt = ['Ractive'];

	var BaseComponent = exports.BaseComponent = Ractive.extend({
	    navigate: function navigate(url) {
	        app.navigate(url);
	    }
	});

	var components = exports.components = {};

	function create_component(name, configuration) {
	    var initial_data = configuration.data;
	    var get_initial_data = void 0;

	    if (initial_data instanceof Function) {
	        get_initial_data = initial_data;
	    } else {
	        get_initial_data = function get_initial_data() {
	            return initial_data || {};
	        };
	    }

	    components[name] = BaseComponent.extend(utils.merge(configuration, {
	        isolated: true,
	        components: components,
	        data: function data() {
	            return utils.merge(get_initial_data(), { app: app });
	        }
	    }));
	    BaseComponent.components[name] = components[name];
	}

	function partials() {
	    console.log(components, 'components');
	    return Object.keys(components).map(function (name) {
	        return '{{#partial ' + name + '}}<' + name + ' />{{/partial}}';
	    }).join('\n');
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.merge = merge;
	exports.merge_into = merge_into;
	function merge(a, b) {
	    return merge_into(merge_into({}, a), b);
	}

	function merge_into(a, b) {
	    for (var key in b) {
	        a[key] = b[key];
	    }return a;
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.create_router = create_router;
	function create_router(app) {

	    var router = Router({
	        '/test': function test() {
	            console.log('navigates');
	            app.show_page('test');
	            console.log('aft test');
	        }
	    });

	    router.refresh = function () {
	        return window.onhashchange();
	    };

	    router.configure({
	        notfound: function notfound() {
	            console.error('url not found');
	            app.navigate('test');
	        },
	        before: function before() {
	            app.set({
	                no_scroll: false,
	                url: window.location.hash.slice(1)
	            });
	        }
	    });

	    router.init();
	}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _component_helpers = __webpack_require__(2);

	var _testRactive = __webpack_require__(6);

	var _testRactive2 = _interopRequireDefault(_testRactive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _component_helpers.create_component)('test', {
	    template: _testRactive2.default,
	    oninit: function oninit() {
	        this.set('test', 'dziala');
	        this.set('template', _testRactive2.default);
	    }
	});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports={"v":3,"t":[{"t":7,"e":"main","f":[{"t":7,"e":"div","a":{"class":"secondary-bg"}}," ",{"t":7,"e":"h1","f":["Test!"]}]}]};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _component_helpers = __webpack_require__(2);

	var _photoRactive = __webpack_require__(8);

	var _photoRactive2 = _interopRequireDefault(_photoRactive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _component_helpers.create_component)('photo', {
	    template: _photoRactive2.default,
	    oninit: function oninit() {
	        this.set('photo', 'dziala');
	        this.set('template', _photoRactive2.default);
	    }
	});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports={"v":3,"t":[{"t":7,"e":"main","f":[{"t":7,"e":"div","a":{"class":"secondary-bg"}}," ",{"t":7,"e":"h1","f":["PHOTOT!"]}]}]};

/***/ })
/******/ ]);