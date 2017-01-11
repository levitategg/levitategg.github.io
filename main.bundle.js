webpackJsonp([0,3],{

/***/ 1161:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1161;


/***/ },

/***/ 1162:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(549);


/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this.url = 'http://vps.levitate.gg/api/levitate_news';
    }
    NewsService.prototype.getNews = function () {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    NewsService.prototype.extractData = function (res) {
        var data = res.json();
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var n = data_1[_i];
            if (!n.author.avatar) {
                n.author.avatarUrl = 'https://discordapp.com/assets/dd4dbc0016779df1378e7812eabaa04d.png';
            }
            else {
                n.author.avatarUrl = "https://images.discordapp.net/avatars/" + n.author.id + "/" + n.author.avatar + ".jpg";
            }
        }
        return data;
    };
    NewsService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
    };
    NewsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], NewsService);
    return NewsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/news.service.js.map

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(461);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_router, _title) {
        this._router = _router;
        this._title = _title;
        this.title = "Levitate";
        this.leftNavLinks = [
            {
                title: "Home",
                href: ""
            },
            {
                title: "News",
                href: "news"
            },
            {
                title: "Team",
                href: "team"
            },
            {
                title: "About",
                href: "about"
            },
            {
                title: "Contact Us",
                href: "contact"
            }
        ];
        this.rightNavLinks = [
            {
                title: "Discord",
                href: "http://discord.levitate.gg"
            }
        ];
    }
    AppComponent.prototype.getDeepestTitle = function (routeSnapshot) {
        var title = routeSnapshot.data ? routeSnapshot.data['title'] : '';
        if (routeSnapshot.firstChild) {
            title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* NavigationEnd */]) {
                _this._title.setTitle(_this.getDeepestTitle(_this._router.routerState.snapshot.root) + " — " + _this.title);
            }
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(898),
            styles: [__webpack_require__(891)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/app.component.js.map

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutService = (function () {
    function AboutService(http) {
        this.http = http;
        this.url = 'http://vps.levitate.gg/api/levitate_about';
    }
    AboutService.prototype.getAbout = function () {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AboutService.prototype.extractData = function (res) {
        return res.json();
    };
    AboutService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
    };
    AboutService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], AboutService);
    return AboutService;
    var _a;
}());
//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/about.service.js.map

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactUsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactUsService = (function () {
    function ContactUsService(http) {
        this.http = http;
        this.url = 'http://vps.levitate.gg/api/levitate_contact';
    }
    ContactUsService.prototype.sendEmail = function (contactInfo) {
        return this.http.post(this.url, contactInfo, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' })
        }).map(function (res) {
            var body = res.json();
            return body && body.success;
        });
    };
    ContactUsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], ContactUsService);
    return ContactUsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/contact.service.js.map

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TeamService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamService = (function () {
    function TeamService(http) {
        this.http = http;
        this.url = 'http://vps.levitate.gg/api/levitate_players';
    }
    TeamService.prototype.getPlayers = function () {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TeamService.prototype.extractData = function (res) {
        return res.json();
    };
    TeamService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
    };
    TeamService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], TeamService);
    return TeamService;
    var _a;
}());
//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/team.service.js.map

/***/ },

/***/ 548:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 548;


/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(723);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/main.js.map

/***/ },

/***/ 721:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_recaptcha__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home_component__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_news_news_component__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_team_team_component__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_about_component__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact_component__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_news_news_service__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_team_team_service__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_about_about_service__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact_service__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__utils_markdown_pipe__ = __webpack_require__(730);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__utils_markdown_pipe__["a" /* MarkdownPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_11__pages_home_home_component__["a" /* HomeComponent */],
                        data: {
                            title: 'Home'
                        }
                    },
                    {
                        path: 'news',
                        component: __WEBPACK_IMPORTED_MODULE_12__pages_news_news_component__["a" /* NewsComponent */],
                        data: {
                            title: 'News'
                        }
                    },
                    {
                        path: 'team',
                        component: __WEBPACK_IMPORTED_MODULE_13__pages_team_team_component__["a" /* TeamComponent */],
                        data: {
                            title: 'Our Team'
                        }
                    },
                    {
                        path: 'about',
                        component: __WEBPACK_IMPORTED_MODULE_14__pages_about_about_component__["a" /* AboutComponent */],
                        data: {
                            title: 'About Us'
                        }
                    },
                    {
                        path: 'contact',
                        component: __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact_component__["a" /* ContactComponent */],
                        data: {
                            title: 'Contact Us'
                        }
                    },
                ]),
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_9_angular2_recaptcha__["ReCaptchaModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__pages_news_news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_18__pages_team_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_19__pages_about_about_service__["a" /* AboutService */], __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact_service__["a" /* ContactUsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/app.module.js.map

/***/ },

/***/ 722:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], FooterComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], FooterComponent.prototype, "tabs", void 0);
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(899),
            styles: [__webpack_require__(892)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/footer.component.js.map

/***/ },

/***/ 723:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(721);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/index.js.map

/***/ },

/***/ 724:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_service__ = __webpack_require__(468);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(_aboutService) {
        var _this = this;
        this._aboutService = _aboutService;
        this.aboutMsgs = [];
        this._aboutService.getAbout().subscribe(function (aboutMsgs) {
            _this.aboutMsgs = aboutMsgs;
        });
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(900),
            styles: [__webpack_require__(893)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__about_service__["a" /* AboutService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__about_service__["a" /* AboutService */]) === 'function' && _a) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/about.component.js.map

/***/ },

/***/ 725:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_service__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_custom_validators__ = __webpack_require__(729);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(_changeDetectorRef, _contactUsService, _formBulder) {
        this._changeDetectorRef = _changeDetectorRef;
        this._contactUsService = _contactUsService;
        this._formBulder = _formBulder;
        this.formComment = '';
        this.formClasses = [];
        this.form = this._formBulder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(64)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__utils_custom_validators__["a" /* GlobalValidators */].mailFormat]],
            message: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(8)]]
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.formSubmit = function () {
        var _this = this;
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        var v = grecaptcha.getResponse();
        if (!this.form.valid || !v) {
            this.formComment = 'Your submission was invalid.';
            this.formClasses = ['invalid-submission'];
            this.timeout = setTimeout(function () {
                _this.formComment = '';
                _this.formClasses = [];
            }, 7500);
        }
        else {
            this._contactUsService.sendEmail(this.form.value).subscribe(function (result) {
                if (result) {
                    _this.formComment = 'Successfully submitted your message!';
                    _this.formClasses = ['valid-submission'];
                    _this.form.reset();
                    var elements = document.querySelectorAll('.mdl-js-textfield');
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].MaterialTextfield.checkDirty();
                    }
                    _this.timeout = setTimeout(function () {
                        _this.formComment = '';
                        _this.formClasses = [];
                    }, 7500);
                }
                else {
                    _this.formComment = 'Your submission was invalid.';
                    _this.formClasses = ['invalid-submission'];
                    _this.timeout = setTimeout(function () {
                        _this.formComment = '';
                        _this.formClasses = [];
                    }, 7500);
                }
            });
        }
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(901),
            styles: [__webpack_require__(894)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactUsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactUsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === 'function' && _c) || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/contact.component.js.map

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_news_service__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(_newsService) {
        var _this = this;
        this._newsService = _newsService;
        this.news = [];
        this._newsService.getNews().subscribe(function (news) {
            _this.news = news.slice(0, 6);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(902),
            styles: [__webpack_require__(895)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__news_news_service__["a" /* NewsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__news_news_service__["a" /* NewsService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/home.component.js.map

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsComponent = (function () {
    function NewsComponent(_newsService) {
        var _this = this;
        this._newsService = _newsService;
        this.news = [];
        this._newsService.getNews().subscribe(function (news) {
            _this.news = news;
        });
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(903),
            styles: [__webpack_require__(896)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */]) === 'function' && _a) || Object])
    ], NewsComponent);
    return NewsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/news.component.js.map

/***/ },

/***/ 728:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service__ = __webpack_require__(470);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamComponent = (function () {
    function TeamComponent(_teamService) {
        var _this = this;
        this._teamService = _teamService;
        this.players = [];
        this._teamService.getPlayers().subscribe(function (players) {
            _this.players = players;
        });
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(904),
            styles: [__webpack_require__(897)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]) === 'function' && _a) || Object])
    ], TeamComponent);
    return TeamComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/team.component.js.map

/***/ },

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GlobalValidators; });
var GlobalValidators = (function () {
    function GlobalValidators() {
    }
    GlobalValidators.mailFormat = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control && control.value && control.value != '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return {
                'incorrectMailFormat': true
            };
        }
        return null;
    };
    return GlobalValidators;
}());
//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/custom-validators.js.map

/***/ },

/***/ 730:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_marked__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MarkdownPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarkdownPipe = (function () {
    function MarkdownPipe() {
    }
    MarkdownPipe.prototype.transform = function (value, args) {
        var md = __WEBPACK_IMPORTED_MODULE_1_marked___default.a.setOptions({});
        return md.parse(value);
    };
    MarkdownPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'markdown'
        }), 
        __metadata('design:paramtypes', [])
    ], MarkdownPipe);
    return MarkdownPipe;
}());
//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/markdown.pipe.js.map

/***/ },

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/environment.js.map

/***/ },

/***/ 732:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/nimas/WebstormProjects/levitate.gg/website/src/polyfills.js.map

/***/ },

/***/ 891:
/***/ function(module, exports) {

module.exports = ".app-content {\n  padding: 20px;\n  height: 100%;\n  background-color: #fff;\n  max-width: 900px;\n  margin: auto;\n  margin-top: 1rem;\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2); }\n\n.app-content md-card {\n  margin: 20px; }\n\n.app-sidenav {\n  padding: 10px;\n  min-width: 100px; }\n\n.app-content md-checkbox {\n  margin: 10px; }\n\n.app-toolbar-filler {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.app-toolbar-menu {\n  padding: 0 14px 0 14px;\n  color: white; }\n\n.app-icon-button {\n  box-shadow: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  -webkit-filter: none;\n          filter: none;\n  font-weight: normal;\n  height: auto;\n  line-height: inherit;\n  margin: 0;\n  min-width: 0;\n  padding: 0;\n  text-align: left;\n  text-decoration: none; }\n\n.app-action {\n  display: inline-block;\n  position: fixed;\n  bottom: 20px;\n  right: 20px; }\n\n.app-spinner {\n  height: 30px;\n  width: 30px;\n  display: inline-block; }\n\n.app-input-icon {\n  font-size: 16px; }\n\n.app-list {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  width: 350px;\n  margin: 20px; }\n\n.app-progress {\n  margin: 20px; }\n\n.app-title {\n  margin-left: 1rem;\n  margin-right: 1rem; }\n  .app-title a {\n    text-decoration: none;\n    color: white; }\n\n[md-tab-nav-bar] {\n  border-bottom: none;\n  margin-left: 1rem;\n  margin-right: 1rem; }\n\n[md-tab-link].active {\n  background-color: rgba(0, 0, 0, 0.3); }\n"

/***/ },

/***/ 892:
/***/ function(module, exports) {

module.exports = ".footer-distributed {\n  background-color: #03a9f4;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  width: 100%;\n  text-align: left;\n  padding: 45px 50px;\n  margin-top: 1rem; }\n\n.footer-distributed .footer-left p {\n  color: white;\n  font-size: 14px;\n  margin: 0; }\n\n/* Footer links */\n.footer-distributed p.footer-links {\n  font-size: 18px;\n  font-weight: bold;\n  color: #ffffff;\n  margin: 0 0 10px;\n  padding: 0; }\n\n.footer-distributed p.footer-links a {\n  display: inline-block;\n  line-height: 1.8;\n  text-decoration: none;\n  color: inherit; }\n\n.footer-distributed .footer-right {\n  float: right;\n  max-width: 180px;\n  color: white; }\n\n.footer-distributed .footer-right a {\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  background-color: white;\n  border-radius: 2px;\n  font-size: 20px;\n  color: #03a9f4;\n  text-align: center;\n  line-height: 35px;\n  margin-left: 3px; }\n\n.title {\n  margin-bottom: 2rem; }\n\n/* If you don't want the footer to be responsive, remove these media queries */\n@media (max-width: 600px) {\n  .footer-distributed .footer-left,\n  .footer-distributed .footer-right {\n    text-align: center; }\n  .footer-distributed .footer-right {\n    float: none;\n    margin: 0 auto 20px; }\n  .footer-distributed .footer-left p.footer-links {\n    line-height: 1.8; } }\n"

/***/ },

/***/ 893:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 894:
/***/ function(module, exports) {

module.exports = ".form-container md-input-container {\n  width: 100%; }\n\n.form-container .form-message-container {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .form-container .form-message-container .form-message.valid-submission {\n    color: #4CAF50; }\n  .form-container .form-message-container .form-message.invalid-submission {\n    color: #F44336; }\n\n.form-container .recaptcha-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.form-container .button-container {\n  text-align: center; }\n"

/***/ },

/***/ 895:
/***/ function(module, exports) {

module.exports = ".home-content iframe {\n  display: block;\n  margin: 0 auto; }\n\n.home-content .header-image {\n  background-size: cover; }\n"

/***/ },

/***/ 896:
/***/ function(module, exports) {

module.exports = ".news-content .header-image {\n  background-size: cover; }\n"

/***/ },

/***/ 897:
/***/ function(module, exports) {

module.exports = ".player-card-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .player-card-container md-card {\n    margin: 1rem; }\n  .player-card-container .header-image {\n    background-size: cover; }\n"

/***/ },

/***/ 898:
/***/ function(module, exports) {

module.exports = "<md-sidenav-layout>\n  <md-sidenav #sidenav [mode]=\"'over'\" class=\"app-sidenav\">\n    <h2>{{this.title}}</h2>\n    <nav md-tab-nav-bar>\n      <a md-tab-link\n         *ngFor=\"let link of this.leftNavLinks\"\n         #tabLink\n         [routerLink]=\"link.href\"\n         [routerLinkActive]=\"'active'\"\n         [routerLinkActiveOptions]=\"{ exact: true }\"\n         [active]=\"tabLink.classList.contains('active')\">\n        {{link.title}}\n      </a>\n      <a md-tab-link\n         *ngFor=\"let link of this.rightNavLinks\"\n         #tabLink\n         [routerLink]=\"link.href\"\n         [routerLinkActive]=\"'active'\"\n         [routerLinkActiveOptions]=\"{ exact: true }\"\n         [active]=\"tabLink.classList.contains('active')\">\n        {{link.title}}\n      </a>\n    </nav>\n  </md-sidenav>\n\n\n  <md-toolbar [color]=\"'primary'\">\n    <button class=\"app-icon-button\" (click)=\"sidenav.toggle()\">\n      <i class=\"material-icons app-toolbar-menu\">menu</i>\n    </button>\n\n    <span class=\"app-title\"><a [routerLink]=\"''\">{{this.title}}</a></span>\n\n    <div fxFlex fxShow=\"false\" fxShow.gt-md>\n      <nav md-tab-nav-bar>\n        <a md-tab-link\n           *ngFor=\"let link of this.leftNavLinks\"\n           #tabLink\n           [routerLink]=\"link.href\"\n           [routerLinkActive]=\"'active'\"\n           [routerLinkActiveOptions]=\"{ exact: true }\"\n           [active]=\"tabLink.classList.contains('active')\">\n          {{link.title}}\n        </a>\n      </nav>\n\n      <span class=\"app-toolbar-filler\"></span>\n\n      <nav md-tab-nav-bar>\n        <a md-tab-link\n           *ngFor=\"let link of this.rightNavLinks\"\n           [href]=\"link.href\"\n           target=\"_blank\">\n          {{link.title}}\n        </a>\n      </nav>\n    </div>\n  </md-toolbar>\n\n  <div class=\"app-content\">\n    <router-outlet></router-outlet>\n  </div>\n\n  <app-footer [title]=\"this.title\" [tabs]=\"this.leftNavLinks\"></app-footer>\n</md-sidenav-layout>\n"

/***/ },

/***/ 899:
/***/ function(module, exports) {

module.exports = "<footer class=\"footer-distributed\">\n  <div class=\"footer-right\">\n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-youtube\"></i></a>\n    <hr />\n    <span class=\"title\">{{this.title}} &copy; {{this.year}}</span>\n  </div>\n\n  <div class=\"footer-left\">\n    <nav>\n      <a md-button\n        *ngFor=\"let link of this.tabs\"\n         [routerLink]=\"link.href\"\n         [routerLinkActive]=\"'active'\"\n         [routerLinkActiveOptions]=\"{ exact: true }\">\n        {{link.title}}\n      </a>\n    </nav>\n  </div>\n</footer>\n"

/***/ },

/***/ 900:
/***/ function(module, exports) {

module.exports = "<div class=\"about-content\">\n  <h1>About Us</h1>\n\n  <md-card *ngFor=\"let n of this.aboutMsgs\">\n    <md-card-content>\n      <p [innerHtml]=\"n.content | markdown\"></p>\n    </md-card-content>\n  </md-card>\n</div>\n"

/***/ },

/***/ 901:
/***/ function(module, exports) {

module.exports = "<div class=\"contact-content\">\n  <h1>Contact Us</h1>\n\n  <form class=\"form-container\" [formGroup]=\"this.form\" (ngSubmit)=\"this.formSubmit()\">\n    <md-input-container>\n      <input md-input placeholder=\"Name\" name=\"name\" formControlName=\"name\">\n    </md-input-container>\n    <md-input-container>\n      <input md-input placeholder=\"Email\" name=\"email\" formControlName=\"email\">\n    </md-input-container>\n    <md-input-container>\n      <textarea md-input placeholder=\"Message\" name=\"message\" formControlName=\"message\"></textarea>\n    </md-input-container>\n\n    <div class=\"recaptcha-container\">\n      <re-captcha site_key=\"6LdquxAUAAAAAGPGhklooB2uJHbEkCIn3w_B8XFL\"></re-captcha>\n    </div>\n\n    <div class=\"form-message-container\">\n      <div *ngIf=\"this.formComment\" class=\"form-message\" [innerHtml]=\"this.formComment\" [ngClass]=\"this.formClasses\"></div>\n    </div>\n\n    <div class=\"button-container\">\n      <button type=\"submit\" md-raised-button>Submit</button>\n    </div>\n  </form>\n</div>\n"

/***/ },

/***/ 902:
/***/ function(module, exports) {

module.exports = "<div class=\"home-content\">\n  <h1>Welcome to Levitate</h1>\n\n  <h3>Most Recent News</h3>\n  <div class=\"news-container\">\n    <md-card *ngFor=\"let n of this.news\">\n      <md-card-header>\n        <div md-card-avatar class=\"header-image\"\n             [style.background-image]=\"'url(' + n.author.avatarUrl + ')'\">\n        </div>\n        <md-card-title>{{n.author.username}}</md-card-title>\n        <md-card-subtitle>{{n.date | amTimeAgo}}</md-card-subtitle>\n      </md-card-header>\n      <md-card-content>\n        <p [innerHtml]=\"n.content | markdown\"></p>\n      </md-card-content>\n    </md-card>\n  </div>\n\n  <h3>Our Discord</h3>\n  <div class=\"widget-container\">\n    <iframe src=\"https://discordapp.com/widget?id=246077671887339521&amp;theme=light\"\n            width=\"350\" height=\"500\" allowtransparency=\"true\" frameborder=\"0\"></iframe>\n\n  </div>\n</div>\n"

/***/ },

/***/ 903:
/***/ function(module, exports) {

module.exports = "<div class=\"news-content\">\n  <h1>News</h1>\n\n  <md-card *ngFor=\"let n of this.news\">\n    <md-card-header>\n      <div md-card-avatar class=\"header-image\"\n           [style.background-image]=\"'url(' + n.author.avatarUrl + ')'\">\n      </div>\n      <md-card-title>{{n.author.username}}</md-card-title>\n      <md-card-subtitle><time [title]=\"n.date | amDateFormat:'LL'\">{{n.date | amTimeAgo}}</time></md-card-subtitle>\n    </md-card-header>\n    <md-card-content>\n      <p [innerHtml]=\"n.content | markdown\"></p>\n    </md-card-content>\n  </md-card>\n</div>\n\n\n"

/***/ },

/***/ 904:
/***/ function(module, exports) {

module.exports = "<div class=\"team-content\">\n  <h1>League of Legends Team</h1>\n\n  <div class=\"player-card-container\"\n       fxLayout=\"row\"\n       fxLayoutAlign=\"space-between center\">\n    <div fxFlex=\"33%\" fxFlex.xs=\"100%\" *ngFor=\"let player of this.players\">\n      <md-card>\n        <md-card-header>\n          <div md-card-avatar class=\"header-image\"\n               [style.background-image]=\"'url(' + player.img + ')'\">\n          </div>\n          <md-card-title>{{player.name}}</md-card-title>\n        </md-card-header>\n        <img md-card-image [src]=\"player.img\">\n      </md-card>\n    </div>\n  </div>\n</div>\n"

/***/ }

},[1162]);
//# sourceMappingURL=main.bundle.map