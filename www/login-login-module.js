(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"login-content\" padding>\r\n  <ion-row>\r\n      <ion-col text-center>\r\n        <h1 class=\"logo\" [routerLink]=\"['/home']\">\r\n          <ion-label color=\"primary\" text-center>\r\n            <img src=\"/assets/icon/family-icon.png\" style=\"width: 50px; height: 50px;\">\r\n            <p>FAMILY APP</p>\r\n          </ion-label>\r\n        </h1>      \r\n        </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n      <ion-col>\r\n        <ion-list style=\"border: 1px solid lightgrey;\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Email</ion-label>\r\n              <ion-input type=\"text\" #email></ion-input>\r\n            </ion-item>          \r\n            <ion-item>\r\n              <ion-label position=\"floating\" translate>Password</ion-label>\r\n              <ion-input type=\"password\" #pass></ion-input>\r\n            </ion-item>          \r\n          </ion-list>\r\n          <ion-col>\r\n              <ion-button class=\"log-in-button\" color=\"dark\" (click)=\"loginV1(this.email.value, this.pass.value)\" translate>Login</ion-button>             \r\n          </ion-col>\r\n          <ion-col>              \r\n              <ion-button class=\"log-in-button\" color=\"light\" [routerLink]=\"['/register']\" translate>SignUp</ion-button>\r\n          </ion-col> \r\n          <ion-col>              \r\n            <ion-button class=\"log-in-button\" color=\"light\" (click)=\"devloginV1('davidduckwitz@gmail.com','123456')\" translate>DEV LOGIN</ion-button>\r\n        </ion-col>      \r\n       \r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>  \r\n    <ion-col>\r\n      <ion-button class=\"log-in-button\" color=\"danger\" expand=\"block\" (click)=\"doGoogleLogin()\">\r\n        LOG IN WITH GOOGLE\r\n      </ion-button>\r\n    </ion-col>\r\n   \r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  --background: url('eminem.jpg') no-repeat top center;\n  --background-position: center;\n  /* Center the image */\n  --background-repeat: no-repeat;\n  /* Do not repeat the image */\n  --background-size: cover;\n  /* Resize the background image to cover the entire */ }\n\n.logo {\n  color: black;\n  font-size: 64px;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 50px; }\n\n.description {\n  color: black;\n  font-size: 22px;\n  text-align: center; }\n\n.log-in-button {\n  margin-top: 40px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRzpcXGFuZHJvaWRcXGZhbWlseV9uZXcvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvREFBYTtFQUNiLDZCQUFzQjtFQUFTLHFCQUFBO0VBQy9CLDhCQUFvQjtFQUFZLDRCQUFBO0VBQ2hDLHdCQUFrQjtFQUFRLG9EQUFBLEVBQXFEOztBQUdqRjtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2VtaW5lbS5qcGcnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcclxuICAtLWJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xyXG4gIC0tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cclxuICAtLWJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlICovXHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiA2NHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZy1pbi1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var LoginPage = /** @class */ (function () {
    function LoginPage(googlePlus, loadingController, router, platform, alertController, authenticationService) {
        this.googlePlus = googlePlus;
        this.loadingController = loadingController;
        this.router = router;
        this.platform = platform;
        this.alertController = alertController;
        this.authenticationService = authenticationService;
    }
    LoginPage.prototype.doGoogleLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        this.googlePlus.login({
                            'scopes': '',
                            'webClientId': _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].googleWebClientId,
                            'offline': true,
                        })
                            .then(function (user) {
                            // save user data on the native storage
                            loading.dismiss();
                            _this.useGooglePlusloginV1(user.email, user.displayName, user.imageUrl);
                        }, function (err) {
                            console.log(err);
                            if (!_this.platform.is('cordova')) {
                                _this.presentAlert('success', 'Cordova kann im Browser nicht geladen werden');
                            }
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.useGooglePlusloginV1 = function (email, name, image) {
        var _this = this;
        this.authenticationService.googleloginV1(email, name, image)
            .subscribe(function (response) {
            _this.presentAlert('Success', response['message']);
            if (response['status'] === 1) {
                _this.presentAlert('Success', response['message']);
                var user = {
                    name: response['username'],
                    firstname: response['firstname'],
                    lastname: response['lastname'],
                    email: response['email'],
                    image: response['image'],
                    userid: response['userid']
                };
                // this.presentAlert('success', 'Cordova kann im Browser nicht geladen werden');
                _this.authenticationService.setUser(user);
                _this.router.navigate(['/user']);
            }
            else {
                _this.presentAlert('Danger', response['message']);
            }
        }, function (error) {
            console.log(error.status);
            _this.presentAlert('Danger', error.status);
        });
    };
    LoginPage.prototype.loginV1 = function (email, password) {
        var _this = this;
        console.log(email, password);
        this.authenticationService.loginV1(email, password)
            .subscribe(function (response) {
            if (response['status'] === 1) {
                _this.presentAlert('Success', response['message']);
                var user = {
                    name: response['username'],
                    firstname: response['firstname'],
                    lastname: response['lastname'],
                    email: response['email'],
                    image: response['image'],
                    userid: response['userid']
                };
                // this.presentAlert('success', 'Cordova kann im Browser nicht geladen werden');
                _this.authenticationService.setUser(user);
                _this.router.navigate(['/user']);
            }
            else {
                _this.presentAlert('Danger', response['message']);
            }
        }, function (error) {
            console.log(error.status);
            _this.presentAlert('Danger', error.status);
        });
    };
    LoginPage.prototype.devloginV1 = function (email, password) {
        this.loginV1(email, password);
        this.router.navigate(['/user']);
    };
    LoginPage.prototype.presentAlert = function (title, content) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: content,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentLoading = function (loading) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_1__["GooglePlus"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map