webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_postdetail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wordpress_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    // message: string = "Hola Mundo!"
    function HomePage(navCtrl, postService, menuCtrl, platform, statusBar, modalCtrl, datepipe) {
        this.navCtrl = navCtrl;
        this.postService = postService;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.modalCtrl = modalCtrl;
        this.datepipe = datepipe;
        this.showLoadMore = true;
        this.isLoading = true;
        this.getData();
    }
    HomePage.prototype.getData = function () {
        var _this = this;
        this.postService.getPost().subscribe(function (data) {
            _this.posts = data;
            if (_this.posts.length > 0) {
                _this.isLoading = false;
            }
            else {
                _this.isLoading = true;
            }
            Object.keys(_this.posts).forEach(function (key) {
                // if (this.posts[key].primary_tag != null || this.posts[key].primary_tag != undefined) {
                //   this.posts[key].category = this.posts[key].primary_tag.name;
                // }
                // else {
                //   this.posts[key].category = "";
                // }
                (_this.posts[key]._embedded.author).forEach(function (author) {
                    _this.author_image = author.avatar_urls;
                });
                if (_this.posts[key].author_image == null) {
                    _this.posts[key].author_image = 'https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-128.png';
                }
                else {
                    _this.posts[key].author_image = _this.posts[key].author_image;
                }
                if (_this.posts[key]._embedded['wp:featuredmedia'] == "" || _this.posts[key]._embedded['wp:featuredmedia'] == null || _this.posts[key]._embedded['wp:featuredmedia'] == undefined) {
                    _this.posts[key].profile_image = 'http://via.placeholder.com/80x80';
                }
                else {
                    _this.posts[key].profile_image = _this.posts[key]._embedded['wp:featuredmedia'][0].source_url;
                }
            });
        });
    };
    //TIMELINE section-------
    //get a list of article published dates in proper format after removing duplicates
    //Open any particular post in details
    HomePage.prototype.openCard = function (post) {
        // this.nav.setRoot(PostDetailPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__posts_postdetail__["a" /* PostDetailPage */], post);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/home/home.html"*/'<ion-content>\n  <ion-card class="post-card" *ngFor="let post of posts" (click)="openCard(post)">\n    <ion-card-content>\n      <!-- dimensions set using attributes -->\n      <div class="post-image">\n        <img src="{{post.profile_image}}" />\n        <div class="post-image-title">{{post.category}}</div>\n      </div>\n      <ion-card-title class="post-title">\n        <b>{{post.title.rendered}}</b>\n      </ion-card-title>\n      <div class="post-date">\n        <p class="date">{{post.date | date : \'MMM d, y\' }}&nbsp;{{post.date | date : \'h:mm a\' }}</p>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <div *ngIf="isLoading" text-center padding>\n    <ion-spinner></ion-spinner>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_wordpress_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostDetailPage = (function () {
    function PostDetailPage(domSanitizer, navCtrl, navParams, postService, events) {
        this.domSanitizer = domSanitizer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postService = postService;
        this.events = events;
        this.getData();
        this.posts = [];
        events.publish('hideHeader', { isHidden: true });
    }
    PostDetailPage.prototype.ionViewWillLeave = function () {
        //Make footer visiable while leaving the page.
        this.events.publish('hideHeader', { isHidden: false });
    };
    PostDetailPage.prototype.ionViewDidLoad = function () {
    };
    PostDetailPage.prototype.getData = function () {
        this.post = this.navParams.data;
        this.html = this.domSanitizer.bypassSecurityTrustHtml(this.post.html);
        if (this.post._embedded['wp:featuredmedia'] == "" || this.post._embedded['wp:featuredmedia'] == null || this.post._embedded['wp:featuredmedia'] == undefined) {
            this.post.profile_image = 'http://via.placeholder.com/400x250';
        }
        else {
            this.post.profile_image = this.post._embedded['wp:featuredmedia'][0].source_url;
        }
    };
    PostDetailPage.prototype.openPage = function (page) {
        if (page === 'home') {
            this.nav.goToRoot;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], PostDetailPage.prototype, "nav", void 0);
    PostDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post',template:/*ion-inline-start:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/posts/pagedetail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title style="text-transform: uppercase;">\n      {{post._embedded[\'wp:term\'][0][0].name}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="logo-facebook" class="custom-icon facebook" href="https://www.facebook.com/ProfitInEquities"\n          target="_blank"></ion-icon>\n      </button>\n      <button ion-button>\n        <ion-icon name="logo-twitter" class="custom-icon twitter" href="https://twitter.com/ProfitInEquity" target="_blank"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h2> {{post.title.rendered}}</h2>\n  <ion-img height="40%" width="100%" src="{{post.profile_image}}"></ion-img>\n  <div [innerHTML]="post.content.rendered"></div>\n</ion-content>'/*ion-inline-end:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/posts/pagedetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], PostDetailPage);
    return PostDetailPage;
}());

//# sourceMappingURL=postdetail.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, formBuilder, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.events = events;
        this.user = this.formBuilder.group({
            username: [''],
            password: ['']
        });
        events.publish('hideHeader', { isHidden: true });
    }
    LoginPage.prototype.ionViewWillLeave = function () {
        //Make footer visiable while leaving the page.
        this.events.publish('hideHeader', { isHidden: false });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        console.log(this.user.value);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profit In Equities</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding margin-top>\n  <form [formGroup]="user" class="login-form" (ngSubmit)="login()">\n    <ion-item>\n      <ion-label>Username</ion-label>\n      <ion-input type="text" formControlName="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <br>\n    <ion-item class="login-button-wrapper">\n      <button ion-button type="submit" class="login-button">Login</button>\n    </ion-item>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var VideoPage = (function () {
    function VideoPage(navCtrl, navParams, videoService, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videoService = videoService;
        this.sanitizer = sanitizer;
        this.pievideos = [];
        this.getData();
    }
    VideoPage.prototype.ionViewDidLoad = function () {
    };
    VideoPage.prototype.getData = function () {
        var _this = this;
        this.videoService.getVideos().subscribe(function (data) {
            _this.videos = data;
            _this.videos.forEach(function (video) {
                var id = video.id.videoId;
                var snippet = video.snippet;
                if (id != undefined) {
                    _this.videoService.getStatistics(id).subscribe(function (res) {
                        if (res != null) {
                            _this.pievideos.push({
                                id: id,
                                stats: res,
                                snip: snippet
                            });
                        }
                    });
                }
            });
            console.log('Final Object :: ', _this.pievideos);
        });
    };
    VideoPage.prototype.openVideo = function (video) {
        window.location.href = "https://www.youtube.com/watch?v=" + video.id;
    };
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-video',template:/*ion-inline-start:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/video/video.html"*/'<ion-content>\n\n  <ion-card class="video-card" *ngFor="let video of pievideos" (click)="openVideo(video)">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n            <img src="../../assets/icon/video_player.png" class="videoplayer">\n            <!--<button class="video">\n            <ion-icon ios="ios-play" md="md-play" class="player"></ion-icon>\n            </button>-->\n            <img src="{{video.snip.thumbnails.medium.url}}">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <div style="display: flex">\n              <img src="../../assets/icon/thumbs_up-32.png" class="like-dislike"><span style="margin-top: 8px">&nbsp;{{video.stats.likeCount}}</span>\n            </div>\n          </ion-col>\n          <ion-col col-6>\n            <div style="display: flex">\n              <img src="../../assets/icon/thumbs_down-32.png" class="like-dislike"><span style="margin-top: 5px">&nbsp;{{video.stats.dislikeCount}}</span>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/video/video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_service__["b" /* VideoService */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubscribePage = (function () {
    function SubscribePage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        events.publish('hideHeader', { isHidden: true });
    }
    SubscribePage.prototype.ionViewWillLeave = function () {
        //Make footer visiable while leaving the page.
        this.events.publish('hideHeader', { isHidden: false });
    };
    SubscribePage.prototype.ionViewDidLoad = function () {
    };
    SubscribePage.prototype.close = function () {
        this.navCtrl.pop();
    };
    SubscribePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subscribe',template:/*ion-inline-start:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/subscribe/subscribe.html"*/'\n<ion-content padding class="subs-page">\n                <ion-icon name="close" class="close-icon" (click) = "close()"></ion-icon>\n                <br><br><br><br><br><br><br><br><br><br><br><br>\n    <ion-list style="text-align: center; vertical-align: middle">\n        <h2>Subscribe to Profit In Equities</h2>\n        <br>\n        <ion-item>\n        <ion-input type="email" placeholder="youremail@example.com"></ion-input>\n        </ion-item>\n        <br>\n        <button ion-button round small class="subscribe-fill-button" >Subscribe</button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/subscribe/subscribe.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], SubscribePage);
    return SubscribePage;
}());

//# sourceMappingURL=subscribe.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplashPage = (function () {
    function SplashPage(viewCtrl, splashScreen) {
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
    }
    SplashPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SplashPage');
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 4000);
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/splash/splash.html"*/'<!--\n  Generated template for the SplashPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="subs-page">\n  <ion-item class="load-middle">\n      <img src="./assets/imgs/bull-logo-green.png" alt="" />\n    <h1>Profit In Equities</h1>\n    <h6>Read, Learn and Profit</h6>\n  </ion-item>\n  <!-- <br><br><br><br><br><br><br><br><br><br><br><br>\n<ion-list style="text-align: center; vertical-align: middle"> -->\n\n\n<!-- </ion-list> -->\n</ion-content>'/*ion-inline-end:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posts_postdetail__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryFilterPage = (function () {
    function CategoryFilterPage(navCtrl, navParams, postService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postService = postService;
        this.posts = [];
        this.getData();
    }
    CategoryFilterPage.prototype.getData = function () {
        var _this = this;
        this.posts = this.navParams.data;
        Object.keys(this.posts).forEach(function (key) {
            //   if (this.posts[key].primary_tag != null || this.posts[key].primary_tag != undefined) {
            //     this.posts[key].category = this.posts[key].primary_tag.name;
            //   }
            //   else {
            //     this.posts[key].category = "";
            //   }
            //   if (this.posts[key].author.profile_image == null) {
            //     this.posts[key].author.profile_image = 'https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-128.png';
            //   }
            //   else {
            //     this.posts[key].author.profile_image = 'http://localhost:2368/' + this.posts[key].author.profile_image;
            //   }
            if (_this.posts[key]._embedded['wp:featuredmedia'][0].source_url == "" || _this.posts[key]._embedded['wp:featuredmedia'][0].source_url == null || _this.posts[key]._embedded['wp:featuredmedia'][0].source_url == undefined) {
                _this.posts[key]._embedded['wp:featuredmedia'][0].source_url = 'http://via.placeholder.com/80x80';
            }
        });
    };
    CategoryFilterPage.prototype.openCard = function (post) {
        // this.nav.setRoot(PostDetailPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__posts_postdetail__["a" /* PostDetailPage */], post);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], CategoryFilterPage.prototype, "nav", void 0);
    CategoryFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'filter-home',template:/*ion-inline-start:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/filterCategory/filterCategory.html"*/'<ion-content>\n  <ion-card class="post-card" *ngFor="let post of posts" (click)="openCard(post)">\n\n    <ion-card-content>\n      <!-- dimensions set using attributes -->\n      <div class="post-image">\n        <img style="width: 100%; height : 165px;" src="{{post._embedded[\'wp:featuredmedia\'][0].source_url}}" />\n        <!-- <div class="post-image-title">{{post.category}}</div> -->\n      </div>\n      <ion-card-title>\n        <b>{{post.title.rendered}}</b>\n      </ion-card-title>\n      <div style="text-align:end;">\n        <p class="date">{{post.date | date : \'MMM d, y\' }}&nbsp;{{post.date | date : \'h:mm a\' }}</p>\n      </div>\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/filterCategory/filterCategory.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_wordpress_service__["a" /* PostService */]])
    ], CategoryFilterPage);
    return CategoryFilterPage;
}());

//# sourceMappingURL=filterCategory.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl, events) {
        this.navCtrl = navCtrl;
        this.events = events;
        events.publish('hideHeader', { isHidden: true });
    }
    AboutPage.prototype.ionViewWillLeave = function () {
        //Make footer visiable while leaving the page.
        this.events.publish('hideHeader', { isHidden: false });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/about/about.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title class="about-title">\n      About Us\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div class="cover-image">\n    <ion-grid>\n      <ion-row align-items-center>\n        <ion-col col-6 offset-3>\n          <img src="http://www.profitinequities.com/content/images/2017/08/16938823_10154879653621203_1541727101636256438_n.jpg"\n            class="profile-image">\n          <h4>Arbind Kumar Roy</h4><br>\n          <p>Aspiring to be the best that I can be.</p><br>\n          <small>Kanchrapara</small>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_posts_postdetail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_subscribe_subscribe__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_splash_splash__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_wordpress_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utilityService__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_filterCategory_filterCategory__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_video_video__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_about_about__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_posts_postdetail__["a" /* PostDetailPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_subscribe_subscribe__["a" /* SubscribePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_filterCategory_filterCategory__["a" /* CategoryFilterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_about_about__["a" /* AboutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_posts_postdetail__["a" /* PostDetailPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_subscribe_subscribe__["a" /* SubscribePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_filterCategory_filterCategory__["a" /* CategoryFilterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_about_about__["a" /* AboutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__utilityService__["a" /* UtilityService */],
                __WEBPACK_IMPORTED_MODULE_14__providers_wordpress_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_14__providers_wordpress_service__["b" /* VideoService */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common__["d" /* DatePipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_video_video__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_wordpress_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_subscribe_subscribe__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_splash_splash__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_filterCategory_filterCategory__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














// import { Push, PushObject, PushOptions } from  '@ionic/cloud-angular';

var MyApp = (function () {
    function MyApp(menuCtrl, platform, statusBar, modalCtrl, splashScreen, postService, datepipe, events, http) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.modalCtrl = modalCtrl;
        this.splashScreen = splashScreen;
        this.postService = postService;
        this.datepipe = datepipe;
        this.events = events;
        this.http = http;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.shownGroup = null;
        this.searchTerm = '';
        this.navbarIsHidden = true;
        // this.splashScreen.show();
        this.initializeApp();
        this.initializeItems();
        this.getCategories();
        this.getTags();
        events.subscribe('hideHeader', function (data) {
            _this.navbarIsHidden = data.isHidden;
        });
        // this.http.get('./assets/pie_data/pie_data.json')
        // .subscribe(data=> {
        //     console.log(data);
        // });
        // this.http.get('http://18.191.83.117/wordpress/index.php/wp-json/wp/v2/posts')
        // .subscribe(data=> {
        //     console.log(data);
        // });
    }
    MyApp.prototype.ionViewDidLoad = function () {
        this.setFilteredItems();
    };
    //searchbar filter in menu
    MyApp.prototype.setFilteredItems = function () {
        if (this.searchTerm == null || this.searchTerm == "" || this.searchTerm == undefined) {
            this.categories = this.categorylist;
        }
        this.categories = this.filterItems(this.searchTerm);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            var splash = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_splash_splash__["a" /* SplashPage */]);
            splash.present();
        });
    };
    // initializeMenuItems() {
    //   //categoryList view in menu items
    //   this.tags.forEach((eachObj, index) => {
    //     this.categories[index] = { 'name': eachObj.name, 'id': eachObj.id };
    //   });
    //   this.categorylist = this.categories;
    //   //yearList view in menu items
    //   this.monthsInYear();
    // }
    MyApp.prototype.initializeMenuItems = function () {
        this.getCategories();
        this.categorylist = this.categories;
        //yearList view in menu items
        this.monthsInYear();
    };
    //TIMELINE section-------
    //get a list of article published dates in proper format after removing duplicates
    MyApp.prototype.monthsInYear = function () {
        var _this = this;
        this.publishlist = [];
        this.updated_publishlist = [];
        Object.keys(this.dataItmes).forEach(function (key) {
            var publishdate = _this.dataItmes[key].date;
            var latest_date = _this.datepipe.transform(publishdate, 'yyyy-MMMM-dd');
            var str1 = latest_date.split('-');
            var month = str1[1];
            var year = str1[0];
            _this.publishlist.push({ 'month': month, 'year': year });
        });
        var dedup = this.dedup(this.publishlist);
        var outputMap = new Map();
        for (var i in dedup) {
            var year = dedup[i].year;
            var month = dedup[i].month;
            var months = outputMap.get(year);
            if (null != months) {
                outputMap.set(year, months + "," + month);
            }
            else {
                outputMap.set(year, month);
            }
        }
        this.logMapElements(outputMap);
    };
    //get list of article published year and its corresponding months for particular year
    MyApp.prototype.logMapElements = function (map) {
        var iterator = map.entries();
        this.updated_publishlist = [];
        for (var index = 0; index < map.size; index++) {
            var values = iterator.next().value;
            this.updated_publishlist.push({ 'year': values[0], 'months': values[1] });
        }
    };
    //display article published months for the specific year clicked
    MyApp.prototype.getmonths = function (item) {
        this.listedMonthsForThisYear = [];
        var monthlist = item.months.split(',');
        for (var _i = 0, monthlist_1 = monthlist; _i < monthlist_1.length; _i++) {
            var month = monthlist_1[_i];
            this.listedMonthsForThisYear.push(month);
        }
    };
    //remove duplictes from monthsInYear
    MyApp.prototype.dedup = function (arr) {
        var hashTable = {};
        return arr.filter(function (el) {
            var key = JSON.stringify(el);
            var match = Boolean(hashTable[key]);
            return (match ? false : hashTable[key] = true);
        });
    };
    //filter search
    MyApp.prototype.filterItems = function (searchTerm) {
        return this.categories.filter(function (item) {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    MyApp.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    MyApp.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    MyApp.prototype.openPage = function (page) {
        if (page === 'home') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        }
        else if (page === 'subscribe') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_subscribe_subscribe__["a" /* SubscribePage */]);
        }
    };
    //service call to get all categories
    MyApp.prototype.getCategories = function () {
        var _this = this;
        // this.categories = [];
        this.postService.getCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    MyApp.prototype.getTags = function () {
        var _this = this;
        // this.categories = [];
        this.postService.getTags().subscribe(function (data) {
            _this.data = data;
        });
    };
    //service call to get all posts
    MyApp.prototype.initializeItems = function () {
        var _this = this;
        this.yearList = [];
        this.monthList = [];
        this.dataItmes = [];
        this.postService.getPost().subscribe(function (data) {
            _this.dataItmes = data;
            console.log(_this.dataItmes);
        });
    };
    // data[0]._embedded['wp:term'][0][1].name
    //service call for all posts
    MyApp.prototype.showSelectedCategoryCards = function (id) {
        // this.postService.getPost().subscribe((data) => {
        //   this.getalldata = data;
        //   this.specificCategoryItems = [];
        //   let i = 0;
        //   Object.keys(this.getalldata).forEach(key => {
        //     if (this.getalldata[key]._embedded['wp:term'] == null || this.getalldata[key]._embedded['wp:term'] == undefined) {
        //       this.getalldata[key]._embedded['wp:term'][0][1].id = { 'id': "" };
        //     }
        //     if (id == this.getalldata[key]._embedded['wp:term']) {
        //       this.specificCategoryItems[i] = this.getalldata[key];
        //       i++;
        //     }
        //   });
        this.sendAllPost();
        this.menuCtrl.close();
        // });
    };
    //on clicking month
    MyApp.prototype.showCardsByMonth = function (year, month) {
        this.updated_dataItmes = [];
        for (var _i = 0, _a = this.dataItmes; _i < _a.length; _i++) {
            var data = _a[_i];
            var pub_date = data.date;
            var ldate = this.datepipe.transform(pub_date, 'yyyy-MMMM-dd');
            var str1 = ldate.split('-');
            if (str1[1] == month && str1[0] == year) {
                this.updated_dataItmes.push(data);
            }
        }
        this.sendAllItems();
        this.menuCtrl.close();
    };
    MyApp.prototype.sendAllPost = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.sendAllItems = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_filterCategory_filterCategory__["a" /* CategoryFilterPage */], this.updated_dataItmes);
    };
    MyApp.prototype.selectedSegment = function (page) {
        if (page === 'article') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        }
        else if (page === 'video') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_video_video__["a" /* VideoPage */]);
        }
    };
    MyApp.prototype.about = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */]);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]; })),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */])
    ], MyApp.prototype, "home", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/akashmitra/Workspace/Working/pie-crust/src/app/app.html"*/'<ion-header ion-fixed class="custom-toolbar" *ngIf="!navbarIsHidden" ng-click="clickfooter();">\n  <ion-toolbar>\n    <button ion-button menuToggle left class="icon-wrapper" (click)="initializeMenuItems()">\n      <ion-icon name="menu" class="custom-icon"></ion-icon>\n    </button>\n    <ion-buttons>\n      <button ion-button (click)="openPage(\'home\')" style="margin-right: 15px;" class="icon-wrapper">\n        <ion-icon name="md-home" class="footer-icon custom-icon"></ion-icon>\n      </button>\n      <a button ion-button style="margin-right: 15px;" class="icon-wrapper" href="https://www.youtube.com/channel/UC6A4PIESjI6czvt-GubM8FQ"\n        target="_blank">\n        <ion-icon name="logo-youtube" class="footer-icon custom-icon youtube"></ion-icon>\n      </a>\n      <a button ion-button style="margin-right: 15px;" class="icon-wrapper" href="https://www.facebook.com/ProfitInEquities"\n        target="_blank">\n        <ion-icon name="logo-facebook" class="footer-icon custom-icon facebook"></ion-icon>\n      </a>\n      <a button ion-button style="margin-right: 15px;" class="icon-wrapper" href="https://twitter.com/ProfitInEquity"\n        target="_blank">\n        <ion-icon name="logo-twitter" class="footer-icon custom-icon twitter"></ion-icon>\n      </a>\n      <button ion-button class="icon-wrapper" style="width: 29%" (click)="openPage(\'subscribe\')">\n        <button ion-button round outline small style="font-size: 79%;" class="subscribe-outline-button footer-icon">Subscribe</button>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n  <!-- Segment buttons with text -->\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="selectedSection" color="primary">\n      <ion-segment-button value="articles" (ionSelect)="selectedSegment(\'article\')">\n        Articles\n      </ion-segment-button>\n      <ion-segment-button value="videos" (ionSelect)="selectedSegment(\'video\')">\n        Videos\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-menu id="card-menu" class="card-menu" [content]="content" side="left" padding>\n\n  <ion-content>\n    <ion-searchbar class="searchbar" [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()" placeholder="Search categories"></ion-searchbar>\n    <h6 class="title-center">CATEGORIES</h6>\n    <ion-list>\n      <ion-item *ngFor="let category of categories">\n        <button ion-item text-wrap (click)="showSelectedCategoryCards(category.id)"> {{ category.name }} </button>\n      </ion-item>\n    </ion-list>\n    <h6 class="title-center">TIMELINE</h6>\n    <div class="calender-align" *ngFor="let items of updated_publishlist; let i=index" text-wrap>\n      <ion-list>\n        <ion-item class="list-selector" (click)="toggleGroup(i);getmonths(items);" [ngClass]="{active: isGroupShown(i)}">\n          <h3>\n            {{items.year}}\n            <ion-icon item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n          </h3>\n        </ion-item>\n      </ion-list>\n      <div *ngIf="isGroupShown(i)">\n        <ion-list>\n          <ion-item *ngFor="let month of listedMonthsForThisYear">\n            <button ion-item (click)="showCardsByMonth(items.year,month)">\n              {{ month }}\n            </button>\n          </ion-item>\n\n        </ion-list>\n      </div>\n    </div>\n    <h6 class="title-center" (click)="about()">ABOUT US</h6>\n    <h6 class="title-center" (click)="download()">DOWNLOAD</h6>\n\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/akashmitra/Workspace/Working/pie-crust/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__providers_wordpress_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClient */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/akashmitra/Workspace/Working/pie-crust/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilityService = (function () {
    function UtilityService() {
        this.posts = [{
                category: 'Brokerage Recommendations for 2018',
                title: 'Kotak Mahindra MF & Param Capital buy stake',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec odio pellentesque, dictum ante quis, auctor nunc. Integer commodo diam quis justo tempus, a ullamcorper libero porta. Nunc ultrices dolor urna, id accumsan tellus laoreet quis. Praesent auctor, ipsum eget pellentesque posuere, felis nisl rhoncus dolor, ac rhoncus sem sem at felis. In hac habitasse platea dictumst. Sed in lectus lectus. Praesent non elementum magna. Nunc luctus urna a nibh rhoncus placerat. Vestibulum sit amet felis pellentesque, tincidunt nisl eget, viverra augue. Nulla facilisi. Nulla quis ornare nunc. Sed condimentum arcu sed urna luctus molestie. Donec auctor euismod vehicula. Nullam tempus viverra purus, eget molestie enim finibus eget. Cras quis augue iaculis, commodo quam ac, bibendum leo. Donec consequat finibus turpis, lacinia porttitor eros vehicula ac. Aenean pellentesque sem quis turpis ornare tempor. Maecenas finibus nisi tellus, sed aliquet magna eleifend vel. Mauris vel purus erat. Vivamus non velit orci. Nulla vel suscipit sem, ut ornare libero. Etiam consequat venenatis odio, fringilla suscipit sem sollicitudin ac. Vestibulum nec consequat nisl, at laoreet diam. Curabitur tincidunt vehicula nulla ultricies venenatis. Ut ultrices velit et interdum vestibulum. Nam dignissim consequat turpis ultricies ultrices. Integer a augue vitae ligula fermentum dignissim sed at felis.',
                imageSrc: 'assets/imgs/kotak.jpeg',
                authorName: 'Arbind Roy',
                date: 'January, 01 2018'
            },
            {
                category: 'Portfolio cloning',
                title: 'Top 5 picks from edelweiss',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec odio pellentesque, dictum ante quis, auctor nunc. Integer commodo diam quis justo tempus, a ullamcorper libero porta. Nunc ultrices dolor urna, id accumsan tellus laoreet quis. Praesent auctor, ipsum eget pellentesque posuere, felis nisl rhoncus dolor, ac rhoncus sem sem at felis. In hac habitasse platea dictumst. Sed in lectus lectus. Praesent non elementum magna. Nunc luctus urna a nibh rhoncus placerat. Vestibulum sit amet felis pellentesque, tincidunt nisl eget, viverra augue. Nulla facilisi. Nulla quis ornare nunc. Sed condimentum arcu sed urna luctus molestie. Donec auctor euismod vehicula. Nullam tempus viverra purus, eget molestie enim finibus eget. Cras quis augue iaculis, commodo quam ac, bibendum leo',
                imageSrc: 'assets/imgs/logo.png',
                authorName: 'Arbind Roy',
                date: 'January, 02 2018'
            },
            {
                category: 'Portfolio cloning',
                title: 'Top 5 stocks from reliance securities',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec odio pellentesque, dictum ante quis, auctor nunc. Integer commodo diam quis justo tempus, a ullamcorper libero porta. Nunc ultrices dolor urna, id accumsan tellus laoreet quis. Praesent auctor, ipsum eget pellentesque posuere, felis nisl rhoncus dolor, ac rhoncus sem sem at felis. In hac habitasse platea dictumst. Sed in lectus lectus. Praesent non elementum magna. Nunc luctus urna a nibh rhoncus placerat. Vestibulum sit amet felis pellentesque, tincidunt nisl eget, viverra augue. Nulla facilisi. Nulla quis ornare nunc. Sed condimentum arcu sed urna luctus molestie. Donec auctor euismod vehicula. Nullam tempus viverra purus, eget molestie enim finibus eget. Cras quis augue iaculis, commodo quam ac, bibendum leo',
                imageSrc: 'assets/imgs/logo.png',
                authorName: 'Arbind Roy',
                date: 'January, 02 2018'
            },
            {
                category: 'Porinju Veliyath',
                title: 'One stock where Porinju Veliyath is buying shares',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec odio pellentesque, dictum ante quis, auctor nunc. Integer commodo diam quis justo tempus, a ullamcorper libero porta. Nunc ultrices dolor urna, id accumsan tellus laoreet quis. Praesent auctor, ipsum eget pellentesque posuere, felis nisl rhoncus dolor, ac rhoncus sem sem at felis. In hac habitasse platea dictumst. Sed in lectus lectus. Praesent non elementum magna. Nunc luctus urna a nibh rhoncus placerat. Vestibulum sit amet felis pellentesque, tincidunt nisl eget, viverra augue. Nulla facilisi. Nulla quis ornare nunc. Sed condimentum arcu sed urna luctus molestie. Donec auctor euismod vehicula. Nullam tempus viverra purus, eget molestie enim finibus eget. Cras quis augue iaculis, commodo quam ac, bibendum leo',
                imageSrc: 'assets/imgs/logo.png',
                authorName: 'Arbind Roy',
                date: 'January, 03 2018'
            }
        ];
    }
    UtilityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'util-service'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UtilityService);
    return UtilityService;
}());

//# sourceMappingURL=utilityService.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Post */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VideoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Post = (function () {
    function Post(id, date, date_gmt, guid, modified, modified_gmt, slug, status, type, link, title, content, excerpt, author, ping_status, sticky, template, format, meta, categories, tags, _links, _embedded) {
        this.id = id;
        this.date = date;
        this.date_gmt = date_gmt;
        this.guid = guid;
        this.modified = modified;
        this.modified_gmt = modified_gmt;
        this.slug = slug;
        this.status = status;
        this.type = type;
        this.link = link;
        this.title = title;
        this.content = content;
        this.excerpt = excerpt;
        this.author = author;
        this.ping_status = ping_status;
        this.sticky = sticky;
        this.template = template;
        this.format = format;
        this.meta = meta;
        this.categories = categories;
        this.tags = tags;
        this._links = _links;
        this._embedded = _embedded;
    }
    return Post;
}());

var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.apiRoot = 'http://18.191.83.117/wordpress/index.php/wp-json/wp/v2/';
        this.per_page = 10;
        this.page = 1;
        this.posts = [];
        this.loading = false;
    }
    //service call to get all data posted
    PostService.prototype.getPost = function () {
        var apiURL = this.apiRoot + "posts?_embed=true&per_page=" + this.per_page + "&page=" + this.page;
        return this.http.get(apiURL).map(function (res) {
            return res.json().map(function (item) {
                return new Post(item.id, item.date, item.date_gmt, item.guid, item.modified, item.modified_gmt, item.slug, item.status, item.type, item.link, item.title, item.content, item.excerpt, item.author, item.ping_status, item.sticky, item.template, item.format, item.meta, item.categories, item.tags, item._links, item._embedded);
            });
        });
    };
    //service call to get all tags
    PostService.prototype.getTags = function () {
        this.urlTag = this.apiRoot + "tags";
        return this.http.get(this.urlTag).map(function (res) {
            res = res.json();
            return res;
        });
    };
    //service call to get all tags
    PostService.prototype.getCategories = function () {
        this.urlTag = this.apiRoot + "categories";
        return this.http.get(this.urlTag).map(function (res) {
            res = res.json();
            return res;
        });
    };
    //service call to get all published posts
    PostService.prototype.getPublishedPosts = function () {
        this.url = this.apiRoot + "posts";
        return this.http.get(this.url).map(function (res) {
            res = res.json().posts;
            return res;
        });
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PostService);
    return PostService;
}());

var VideoService = (function () {
    // serviceuri: string = "https://www.googleapis.com/youtube/v3/search?key=" + this.userKey + " &channelId=" + this.channelId + "&part=snippet,id&order=date&maxResults=20";
    function VideoService(http) {
        this.http = http;
        // userKey: string = 'AIzaSyAmbZqH94zP04FMJojXfklbsjFS27Qiwl4';
        this.userKey = 'AIzaSyBYbqLcwAEWMKchBVb8TCDQHiLyDI-uuBI';
        this.channelId = 'UC6A4PIESjI6czvt-GubM8FQ';
    }
    //service call to get all videos
    VideoService.prototype.getVideos = function () {
        var serviceuri = "https://www.googleapis.com/youtube/v3/search?key=" + this.userKey + "&channelId=" + this.channelId + "&part=snippet,id&order=date&maxResults=50";
        return this.http.get(serviceuri).map(function (res) {
            return res = res.json().items;
        });
    };
    //service call to get statistics
    VideoService.prototype.getStatistics = function (videoId) {
        this.url = "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=" + videoId + "&key=" + this.userKey;
        return this.http.get(this.url).map(function (result) {
            return result = result.json().items[0].statistics;
        });
    };
    VideoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], VideoService);
    return VideoService;
}());

//# sourceMappingURL=wordpress-service.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map