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
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
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
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
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

module.exports = "<ion-content class=\"login-content\" padding>\n  <ion-row>\n      <ion-col>\n        <h1 class=\"logo\" [routerLink]=\"['/home']\">FAMILY APP</h1>      \n        <p class=\"description\">A Project by <a href=\"https://davidduckwitz.de\" target=\"_blank\">David Duckwitz & Arina ;)</a></p>\n      </ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-col>\n        <ion-list style=\"border: 1px solid lightgrey;\">\n            <ion-item>\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input type=\"text\" #email></ion-input>\n            </ion-item>          \n            <ion-item>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input type=\"password\" #pass></ion-input>\n            </ion-item>          \n          </ion-list>\n          <ion-col>\n              <ion-button class=\"log-in-button\" color=\"dark\" (click)=\"loginV1(this.email.value, this.pass.value)\">Login</ion-button>             \n          </ion-col>\n          <ion-col>              \n              <ion-button class=\"log-in-button\" color=\"light\" [routerLink]=\"['/register']\">SIGN UP</ion-button>\n          </ion-col> \n          <ion-col>              \n            <ion-button class=\"log-in-button\" color=\"light\" (click)=\"devloginV1('davidduckwitz@gmail.com','123456')\">DEV LOGIN</ion-button>\n        </ion-col>      \n       \n      </ion-col>\n    </ion-row>\n    <ion-row>  \n    <ion-col>\n      <ion-button class=\"log-in-button\" color=\"danger\" expand=\"block\" (click)=\"doGoogleLogin()\">\n        LOG IN WITH GOOGLE\n      </ion-button>\n    </ion-col>\n   \n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  --background: white; }\n\n.logo {\n  color: black;\n  font-size: 64px;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 50px; }\n\n.description {\n  color: black;\n  font-size: 22px;\n  text-align: center; }\n\n.log-in-button {\n  margin-top: 40px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRzpcXGFuZHJvaWRcXGZhbWlseV9hcHBfaW9uaWNfNC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmxvZ28ge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2ctaW4tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */"

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
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
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
    function LoginPage(googlePlus, nativeStorage, loadingController, router, platform, alertController, authenticationService) {
        this.googlePlus = googlePlus;
        this.nativeStorage = nativeStorage;
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
                            'webClientId': _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].googleWebClientId,
                            'offline': true,
                        })
                            .then(function (user) {
                            // save user data on the native storage
                            var loadeduser = {
                                name: user.displayName,
                                email: user.email,
                                picture: user.imageUrl
                            };
                            _this.authenticationService.setUser(loadeduser);
                            _this.router.navigate(['/user']);
                            loading.dismiss();
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
                    lastname: response['firstname'],
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
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map