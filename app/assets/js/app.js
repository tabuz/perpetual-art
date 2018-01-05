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

	__webpack_require__(9);

	__webpack_require__(11);

	__webpack_require__(13);

	__webpack_require__(15);

	__webpack_require__(17);

	__webpack_require__(19);

	var router = exports.router = void 0;

	var app_initial_data = {
	    loading: true
	};

	window.app = null;

	window.create_app = function () {

	    var app = new _component_helpers.BaseComponent({
	        template: '\n            ' + (0, _component_helpers.partials)() + '\n            {{#if current_page !== \'hero\'}}\n                <navigation/>\n            {{/if}}\n            {{#if current_page}}\n                {{>.current_page}}\n            {{/if}}\n        ',
	        components: _component_helpers.components,
	        oninit: function oninit() {
	            this.set({
	                components_names: Object.keys(this.components)
	            });
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
	        '/': function _() {
	            app.show_page('hero');
	        },
	        '/home': function home() {
	            app.show_page('home');
	        },
	        '/booking': function booking() {
	            app.show_page('booking');
	        },
	        '/navigation': function navigation() {
	            app.show_page('navigation');
	        },
	        '/gallery': function gallery() {
	            app.show_page('gallery');
	        },
	        '/footer': function footer() {
	            app.show_page('footer');
	        },
	        '/details': function details() {
	            app.show_page('details');
	        },
	        '/contact': function contact() {
	            app.show_page('contact');
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

	var _homeRactive = __webpack_require__(6);

	var _homeRactive2 = _interopRequireDefault(_homeRactive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _component_helpers.create_component)('home', {
	    template: _homeRactive2.default,
	    oncomplete: function oncomplete() {
	        set_home_dimentions();

	        $(window).on('resize', function () {
	            set_home_dimentions();
	        });
	    }
	});

	function set_home_dimentions() {
	    $('.home').css('height', $(window).height() - $('nav').height());
	    $('.wrapper').css('width', $('.nav-wrapper.container').css('width'));
	    $('.home-caption').css('width', $('.nav-wrapper ul').css('width'));
	    $('.home-icons').css('width', $('.nav-wrapper ul').css('width'));
	}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports={"v":3,"t":[{"t":7,"e":"main","f":[{"t":7,"e":"div","a":{"class":"home no-padding full-height"},"f":[{"t":7,"e":"div","a":{"class":"content-wrapper"},"f":[{"t":7,"e":"div","a":{"class":"row wrapper full-heigh"},"f":[{"t":7,"e":"div","a":{"class":"home-caption"},"f":[{"t":7,"e":"h1","a":{"class":"padding"},"f":["Creativity in motion"]}," ",{"t":7,"e":"h2","a":{"class":"padding no-padding-bottom"},"f":["Damian Michalak"]}," ",{"t":7,"e":"span","a":{"class":"padding no-padding-top"},"f":["Professional tattoo artist"]}," ",{"t":7,"e":"p","a":{"class":"padding"},"f":["'The boss' who has been tattooing since 209 and has been drawing since he was 8 years old, he has extensive experience in designing and creating tattoos taking into account all customers specific needs in order to create their perfect design."]}]}," ",{"t":7,"e":"div","a":{"class":"home-icons"},"f":[{"t":7,"e":"img","a":{"class":"social-icon","src":"/assets/img/facebook.svg","alt":"facebook icon"}}," ",{"t":7,"e":"img","a":{"class":"social-icon","src":"/assets/img/instagram.svg","alt":"instagram icon"}}," ",{"t":7,"e":"img","a":{"class":"social-icon","src":"/assets/img/pinterest.svg","alt":"pinterest icon"}}," ",{"t":7,"e":"img","a":{"class":"social-icon","src":"/assets/img/youtube.svg","alt":"youtube icon"}}," ",{"t":7,"e":"img","a":{"class":"social-icon","src":"/assets/img/google.svg","alt":"google icon"}}]}]}," ",{"t":7,"e":"div","a":{"class":"row home-bg "},"f":[{"t":7,"e":"img","a":{"class":"responsive-img bg trg-1","src":"/assets/img/home-2.jpg"}}," ",{"t":7,"e":"img","a":{"class":"responsive-img bg trg-2","src":"/assets/img/home-2.jpg"}}," ",{"t":7,"e":"img","a":{"class":"responsive-img bg trg-3","src":"/assets/img/home-2.jpg"}}," ",{"t":7,"e":"img","a":{"class":"responsive-img bg trg-4","src":"/assets/img/home-2.jpg"}}," ",{"t":7,"e":"img","a":{"class":"responsive-img bg trg-5","src":"/assets/img/home-2.jpg"}}]}," ",{"t":7,"e":"img","a":{"class":"home-logo","src":"./assets/img/logo.png","alt":"Damian Michalak Tattoo Artist Logo"}}]}]}]}]};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _component_helpers = __webpack_require__(2);

	var _bookingRactive = __webpack_require__(8);

	var _bookingRactive2 = _interopRequireDefault(_bookingRactive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _component_helpers.create_component)('booking', {
	    template: _bookingRactive2.default,
	    oncomplete: function oncomplete() {
	        set_booking_dimentions();
	        $(window).on('resize', function () {
	            set_booking_dimentions();
	        });
	    }
	});

	function set_booking_dimentions() {
	    $('main').css('height', $(window).height() - $('nav').height());
	}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports={"v":3,"t":[{"t":7,"e":"main","f":[{"t":7,"e":"div","a":{"id":"booking","class":"booking section secondary-gb"},"f":[{"t":7,"e":"div","a":{"class":"container"},"f":[{"t":7,"e":"div","a":{"class":"row text-center booking"},"f":[{"t":7,"e":"div","a":{"class":"booking-caption"},"f":["Never regreat a tattoo!"]}," ",{"t":7,"e":"div","a":{"class":"booking-testimonials"},"f":[{"t":7,"e":"div","a":{"class":"testimonials"},"f":[{"t":7,"e":"span","f":["I came in for a cover up - Damian was very helpful and the design he came up with was fantastic. I'm very pleased with the finished design. Thank you!"]}," ",{"t":7,"e":"p","a":{"class":"testimonials-name"},"f":["Bob Smith, Taunton"]}]}]}," ",{"t":7,"e":"a","a":{"class":"waves-effect waves-light btn-large right book-now-btn primary"},"f":["Book an appointment"]}]}]}]}]}]};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _component_helpers = __webpack_require__(2);

	var _contactRactive = __webpack_require__(10);

	var _contactRactive2 = _interopRequireDefault(_contactRactive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _component_helpers.create_component)('contact', {
	    template: _contactRactive2.default
	});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports={"v":3,"t":[{"t":7,"e":"main","f":[{"t":7,"e":"div","a":{"id":"contact","class":"section primary"},"f":[{"t":7,"e":"div","a":{"class":"container"},"f":[{"t":7,"e":"div","a":{"class":"row text-align-center double-margin-bottom"},"f":[{"t":7,"e":"div","a":{"class":"text-align-center"},"f":[{"t":7,"e":"h2","a":{"class":"section-header alternative-header margin-bottom"},"f":["Contact"]}," ",{"t":7,"e":"p","a":{"class":"secondary text-medium"},"f":["If you have any question or want to book an apointment feel free to contact me"]}]}]}," ",{"t":7,"e":"div","a":{"class":"row"},"f":[{"t":7,"e":"form","a":{"class":"col s8 offset-s2"},"f":[{"t":7,"e":"div","a":{"class":"row "},"f":[{"t":7,"e":"div","a":{"class":"col l6 m6 s12"},"f":[{"t":7,"e":"div","a":{"class":"input-field col s12"},"f":[{"t":7,"e":"input","a":{"id":"contact-name","type":"text"}}," ",{"t":7,"e":"label","a":{"for":"contact-name"},"f":["Name"]}]}," ",{"t":7,"e":"div","a":{"class":"input-field col s12"},"f":[{"t":7,"e":"input","a":{"id":"contact-email","type":"email"}}," ",{"t":7,"e":"label","a":{"for":"contact-email"},"f":["Email"]}]}," ",{"t":7,"e":"div","a":{"class":"input-field col s12"},"f":[{"t":7,"e":"input","a":{"id":"contact-subject","type":"text"}}," ",{"t":7,"e":"label","a":{"for":"contact-subject"},"f":["Subject"]}]}]}," ",{"t":7,"e":"div","a":{"class":"col l6 m6 s12"},"f":[{"t":7,"e":"div","a":{"class":"input-field col s12"},"f":[{"t":7,"e":"textarea","a":{"id":"contact-message","class":"materialize-textarea"}}," ",{"t":7,"e":"label","a":{"for":"contact-message"},"f":["Message"]}]}]}]}," ",{"t":7,"e":"a","a":{"class":"waves-effect waves-light btn-large right send-btn"},"f":["Send"]}]}]}]}]}," ",{"t":7,"e":"footer"}]}]};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _component_helpers = __webpack_require__(2);

	var _detailsRactive = __webpack_require__(12);

	var _detailsRactive2 = _interopRequireDefault(_detailsRactive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _component_helpers.create_component)('details', {
	    template: _detailsRactive2.default
	});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports={"v":3,"t":[{"t":7,"e":"main","f":[{"t":7,"e":"div","a":{"id":"pre-details","class":"container"},"f":[{"t":7,"e":"div","a":{"class":"section padding-bottom"},"f":[{"t":7,"e":"div","a":{"class":"row no-margin"},"f":[{"t":7,"e":"div","a":{"class":"col l6 m6 s12"},"f":[{"t":7,"e":"div","a":{"class":"home-section"},"f":[{"t":7,"e":"div","a":{"class":"display-flex flex-center margin-auto"},"f":[{"t":7,"e":"img","a":{"class":"icon","src":"./assets/img/section-icon-fb.jpg"}}," ",{"t":7,"e":"p","f":["Follow me on Facebook !"]}]}]}]}," ",{"t":7,"e":"div","a":{"class":"col l6 m6 s12"},"f":[{"t":7,"e":"div","a":{"class":"home-section"},"f":[{"t":7,"e":"div","a":{"class":"display-flex flex-center margin-auto"},"f":[{"t":7,"e":"img","a":{"class":"icon","src":"./assets/img/section-icon-tc.jpg"}}," ",{"t":7,"e":"p","f":["Terms & Conditions"]}]}]}]}]}]}]}," ",{"t":7,"e":"div","a":{"class":"section details no-padding-bottom"},"f":[{"t":7,"e":"div","a":{"class":"container"},"f":[{"t":7,"e":"div","a":{"class":"row double-margin-bottom"},"f":[{"t":7,"e":"div","a":{"class":"text-align-center"},"f":[{"t":7,"e":"h2","a":{"class":"section-header"},"f":["About Me"]}]}]}," ",{"t":7,"e":"div","a":{"class":"row details-row"},"f":[{"t":7,"e":"div","a":{"class":"col l6 m6 s12 details-text right full-height"},"f":[{"t":7,"e":"p","a":{"class":"margin-bottom"},"f":["Our Tattoo Studio is based in the heart of Taunton, Somerset in United Kingdom where entire team is commited to meet needs of our customers ensuring they leave 100% satisfied. As a result of our work ethic we have seen customers retuns, being recomended by others."]}," ",{"t":7,"e":"p","a":{"class":"double-margin-bottom"},"f":["Whatever your tattoo requirements, we are here to offer a solution - from custom designs and portraits, biomechanical and tribal, to intricate lettering and symbols. Even if you are not sure exacly that you want our staff are on hand to offer adcive and give ideas. All design work will be dwarn out either on paper on straight ont the skin and we will work with you to ensure each design is created with you in mind. Consultations are done without obligation, so even if you are just surious about tattoo desing then please do not hestitate to get in touch!"]}," ",{"t":7,"e":"div","a":{"class":"details-caption "},"f":[{"t":7,"e":"div","a":{"style":"margin-bottom: .5rem;"},"f":[{"t":7,"e":"i","a":{"class":"material-icons"},"f":["mail"]}," damian.michalak@tattooartist.co.uk"]}," ",{"t":7,"e":"div","a":{"style":"margin-bottom: .5rem;"},"f":[{"t":7,"e":"i","a":{"class":"material-icons"},"f":["phone"]}," 01823 1234567"]}]}]}]}]}]}]}]};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _component_helpers = __webpack_require__(2);

	var _footerRactive = __webpack_require__(14);

	var _footerRactive2 = _interopRequireDefault(_footerRactive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _component_helpers.create_component)('footer', {
	    template: _footerRactive2.default,
	    oninit: function oninit() {}
	});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports={"v":3,"t":[{"t":7,"e":"footer","a":{"class":"footer secondary-gb"},"f":[{"t":7,"e":"div","a":{"class":"clip-div one"}}," ",{"t":7,"e":"div","a":{"class":"clip-div two"}}," ",{"t":7,"e":"div","a":{"class":"clip-div three"}}," ",{"t":7,"e":"div","a":{"class":"container"},"f":[{"t":7,"e":"div","a":{"class":"row"},"f":[{"t":7,"e":"div","a":{"class":"col s3"},"f":[{"t":7,"e":"img","a":{"class":"invert responsive-img","src":"./assets/img/logo.png","alt":"Damian Michalak Tattoo Artist Logo"}}]}]}," ",{"t":7,"e":"div","a":{"class":"row"},"f":[{"t":7,"e":"div","a":{"class":"col s6 offset-s3"},"f":[{"t":7,"e":"div","a":{"class":"col s12 text-align-center margin-bottom"},"f":[{"t":7,"e":"p","f":["© 2018 Damian Michalak Tattoo Artist (registered in Ennglad: #12356343). All rights reserved"]}]}," ",{"t":7,"e":"div","a":{"class":"col l6 m6 s12 text-align-center"},"f":["designed by ",{"t":7,"e":"a","a":{"href":"#"},"f":[{"t":7,"e":"u","f":["SonnesArt.com"]}]}]}," ",{"t":7,"e":"div","a":{"class":"col l6 m6 s12 text-align-center"},"f":["coded by ",{"t":7,"e":"a","a":{"href":"#"},"f":[{"t":7,"e":"u","f":["HubertZelek.co.uk"]}]}]}]}]}]}]}]};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _component_helpers = __webpack_require__(2);

	var _galleryRactive = __webpack_require__(16);

	var _galleryRactive2 = _interopRequireDefault(_galleryRactive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _component_helpers.create_component)('gallery', {
	    template: _galleryRactive2.default
	});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports={"v":3,"t":[{"t":7,"e":"main","f":[{"t":7,"e":"div","a":{"id":"gallery","class":"section"},"f":[{"t":7,"e":"div","a":{"class":"container"},"f":[{"t":7,"e":"div","a":{"class":"row","style":"margin-bottom: 3rem;"},"f":[{"t":7,"e":"div","a":{"class":"text-align-center"},"f":[{"t":7,"e":"h2","a":{"class":"section-header alternative-header margin-bottom"},"f":["Gallery"]}," ",{"t":7,"e":"p","a":{"class":"secondary text-medium text-left"},"f":["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]}]}]}," ",{"t":7,"e":"div","a":{"class":"row"},"f":[{"t":7,"e":"div","a":{"class":"col l12 gallery"},"f":[{"t":7,"e":"div","a":{"class":"gallery-tile small one"},"f":[{"t":7,"e":"div","a":{"class":"mask flex-center"},"f":[{"t":7,"e":"span","f":["Color tattoos"]}]}]}," ",{"t":7,"e":"div","a":{"class":"gallery-tile large two"},"f":[{"t":7,"e":"div","a":{"class":"mask flex-center"},"f":[{"t":7,"e":"span","f":["Unique Projects"]}]}]}," ",{"t":7,"e":"div","a":{"class":"gallery-tile medium three"},"f":[{"t":7,"e":"div","a":{"class":"mask flex-center"},"f":[{"t":7,"e":"span","f":["B&W Designs"]}]}]}," ",{"t":7,"e":"div","a":{"class":"gallery-tile small four"},"f":[{"t":7,"e":"div","a":{"class":"mask flex-center"},"f":[{"t":7,"e":"span","f":["Piercing"]}]}]}," ",{"t":7,"e":"div","a":{"class":"gallery-tile small five"},"f":[{"t":7,"e":"div","a":{"class":"mask flex-center"},"f":[{"t":7,"e":"span","f":["Cover Up's"]}]}]}]}]}]}]}]}]};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _component_helpers = __webpack_require__(2);

	var _heroRactive = __webpack_require__(18);

	var _heroRactive2 = _interopRequireDefault(_heroRactive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _component_helpers.create_component)('hero', {
	    template: _heroRactive2.default,
	    oncomplete: function oncomplete() {
	        set_hero_dimensions();
	        $(window).on('resize', function () {
	            set_hero_dimensions();
	        });
	        setTimeout(function () {
	            console.log('out');
	            console.log(app);
	            app.show_page('home');
	        }, 3000);
	    }
	});

	function set_hero_dimensions() {
	    var browserHeight = jQuery(window).height();
	    var browserWidth = jQuery(window).width();

	    $('.hero-wrapper').css('height', browserHeight);
	    $('.hero').css('height', 0.75 * browserWidth);
	    $('.hero').css('width', 0.75 * browserWidth);

	    var wrapperHeight = Number($('.hero-wrapper').css('height').replace('px', ''));
	    var heroHeight = Number($('.hero').css('height').replace('px', ''));

	    $('.hero-container').css('padding-top', (wrapperHeight - heroHeight) / 2);
	}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports={"v":3,"t":[{"t":7,"e":"main","f":[{"t":7,"e":"div","a":{"class":"row hero-wrapper"},"f":[{"t":7,"e":"div","a":{"class":"hero-container"},"f":[{"t":7,"e":"div","a":{"class":"hero"},"f":[{"t":7,"e":"div","a":{"class":"hero mask"}}]}]}]}]}]};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _component_helpers = __webpack_require__(2);

	var _navigationRactive = __webpack_require__(20);

	var _navigationRactive2 = _interopRequireDefault(_navigationRactive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _component_helpers.create_component)('navigation', {
	    template: _navigationRactive2.default,
	    oncomplete: function oncomplete() {
	        $('nav a').on('click', function () {
	            $('nav a').removeClass('active');
	            $(this).addClass('active');
	        });
	    }
	});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports={"v":3,"t":[{"t":7,"e":"nav","a":{"role":"navigation"},"f":[{"t":7,"e":"div","a":{"class":"content-wrapper"},"f":[{"t":7,"e":"div","a":{"class":"nav-wrapper container"},"f":[{"t":7,"e":"ul","a":{"class":"right hide-on-med-and-down"},"f":[{"t":7,"e":"li","f":[{"t":7,"e":"a","a":{"href":"#/home"},"f":["Home"]}]}," ",{"t":7,"e":"li","f":[{"t":7,"e":"a","a":{"href":"#/details"},"f":["Me."]}]}," ",{"t":7,"e":"li","f":[{"t":7,"e":"a","a":{"href":"#/gallery"},"f":["Gallery"]}]}," ",{"t":7,"e":"li","f":[{"t":7,"e":"a","a":{"href":"#/booking"},"f":["Book Now"]}]}," ",{"t":7,"e":"li","f":[{"t":7,"e":"a","a":{"href":"#/contact"},"f":["Contact"]}]}]}," ",{"t":7,"e":"ul","a":{"id":"nav-mobile","class":"side-nav"},"f":[{"t":7,"e":"li","f":[{"t":7,"e":"a","a":{"href":"#"},"f":["Home"]}]}," ",{"t":7,"e":"li","f":[{"t":7,"e":"a","a":{"href":"#"},"f":["Me."]}]}," ",{"t":7,"e":"li","f":[{"t":7,"e":"a","a":{"href":"#"},"f":["Gallery"]}]}," ",{"t":7,"e":"li","f":[{"t":7,"e":"a","a":{"href":"#"},"f":[{"t":7,"e":"u","f":["Book Now"]}]}]}," ",{"t":7,"e":"li","f":[{"t":7,"e":"a","a":{"href":"#"},"f":["Contact"]}]}]}," ",{"t":7,"e":"a","a":{"href":"#","data-activates":"nav-mobile","class":"button-collapse"},"f":[{"t":7,"e":"i","a":{"class":"material-icons"},"f":["menu"]}]}]}]}]}]};

/***/ })
/******/ ]);