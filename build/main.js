require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hello__ = __webpack_require__(8);


/**
 * Import any routes
 */


/**
 * Create new Instance of Router
 */
const router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

/**
 * User routes here
 */
router.use(__WEBPACK_IMPORTED_MODULE_1__hello__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const path = __webpack_require__(11);
const shared = ['assets', 'components', 'layout', 'middleware', 'plugins', 'static', 'store'];

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-multiple-vuetify',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'A Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', type: 'text/css', href: '//cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css' }, { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css?family=Open+Sans:300|500' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#3B8070'
  },
  /*
  ** Global CSS
  */
  css: ['element-ui/lib/theme-chalk/index.css', { src: '../../assets/scss/style.scss', lang: 'scss' }],
  /*
  ** Global Plugin
  */
  plugins: ['../../plugins/element.js', '../../plugins/vuex.js', '../../store/index.js'],
  /*
  ** Global Module
  */
  modules: [
  // do stuff
  '@nuxtjs/vuetify'],
  vuetify: {
    optionsPath: '~/plugins/vuetify.js'
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      shared.map(item => {
        config.resolve.alias[item] = path.resolve(__dirname, item);
      });

      if (ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })

        const vueLoader = config.module.rules.find(({ loader }) => loader === 'vue-loader');
        const { options: { loaders } } = vueLoader || { options: {} };

        if (loaders) {
          for (const loader of Object.values(loaders)) {
            changeLoaderOptions(Array.isArray(loader) ? loader : [loader]);
          }
        }

        config.module.rules.forEach(rule => changeLoaderOptions(rule.use));
      }
    }
  }
};

const changeLoaderOptions = loaders => {
  if (loaders) {
    for (const loader of loaders) {
      if (loader.loader === 'sass-loader') {
        Object.assign(loader.options, {
          includePaths: ['./assets']
        });
      }
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
module.exports = __webpack_require__(12);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(3);




/**
 * Import any Routes on API folder
 */


const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3050;

/**
 * Set port
 */
app.set('port', port);

/**
 * Use body parser for handling POST method
 */
app.use(__WEBPACK_IMPORTED_MODULE_2_body_parser___default.a.json());

/**
 * Use given APIs
 */
app.use('/api', __WEBPACK_IMPORTED_MODULE_3__api__["a" /* default */]);

/**
 * Import and use Nuxt.js configuration
 */
let config = __webpack_require__(10);
config.dev = !("development" === 'production');

/**
 * Create new instance of Nuxt
 */
const nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

/**
 * Set build only on development mode
 */
if (config.dev) {
  const builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build();
}

/**
 * Use Nuxt renderer on Express
 */
app.use(nuxt.render);

/**
 * Start App
 */
app.listen(port, host);

/**
 * Show listen port
 */
console.log(`App "Blog" listening on ${host}:${port}`);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express_lib_router_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express_lib_router_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express_lib_router_index__);


const router = __WEBPACK_IMPORTED_MODULE_0_express_lib_router_index___default()();

/**
 * Create root endpoint
 */
router.get('/', async (req, res) => {
  res.json({
    message: 'Hello from API!'
  });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express/lib/router/index");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const merge = __webpack_require__(4);
const nuxt = __webpack_require__(5);

const extend = {
  /**
   * Define source directory
   */
  srcDir: __dirname,
  /**
   * Define build target
   */
  buildDir: '.nuxt/blog'

  /**
   * Export config
   */

};module.exports = merge(nuxt, extend);
/* WEBPACK VAR INJECTION */}.call(exports, "app/blog"))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(3);




/**
 * Import any Routes on API folder
 */


const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3060;

/**
 * Set port
 */
app.set('port', port);

/**
 * Use body parser for handling POST method
 */
app.use(__WEBPACK_IMPORTED_MODULE_2_body_parser___default.a.json());

/**
 * Use given APIs
 */
app.use('/api', __WEBPACK_IMPORTED_MODULE_3__api__["a" /* default */]);

/**
 * Import and use Nuxt.js configuration
 */
let config = __webpack_require__(13);
config.dev = !("development" === 'production');

/**
 * Create new instance of Nuxt
 */
const nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

/**
 * Set build only on development mode
 */
if (config.dev) {
  const builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build();
}

/**
 * Use Nuxt renderer on Express
 */
app.use(nuxt.render);

/**
 * Start App
 */
app.listen(port, host);

/**
 * Show listen port
 */
console.log(`App "Admin" listening on ${host}:${port}`);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const merge = __webpack_require__(4);
const nuxt = __webpack_require__(5);

const extend = {
  /**
   * Define source directory
   */
  srcDir: __dirname,
  /**
   * Define build target
   */
  buildDir: '.nuxt/admin',

  /**
   * Custom head title
   */
  head: {
    title: 'Admin Page'
  }

  /**
   * Export config
   */

};module.exports = merge(nuxt, extend);
/* WEBPACK VAR INJECTION */}.call(exports, "app/admin"))

/***/ })
/******/ ]);
//# sourceMappingURL=main.map