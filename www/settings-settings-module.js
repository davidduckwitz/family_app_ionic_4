(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
    }
    UserService.prototype.setUserAvatar = function (avatar, user) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('image', avatar)
            .set('user', user.toString());
        return this.httpClient
            .post('http://familyapp.arina-web-innovations.online/api/v1/setUserAvatar.php', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    UserService.prototype.setUserFirstname = function (firstname, user) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('firstname', firstname)
            .set('user', user.toString());
        return this.httpClient
            .post('http://familyapp.arina-web-innovations.online/api/v1/setUserFirstname.php', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    UserService.prototype.setUserLastname = function (lastname, user) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('lastname', lastname)
            .set('user', user.toString());
        return this.httpClient
            .post('http://familyapp.arina-web-innovations.online/api/v1/setUserLastname.php', params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.html":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>               \r\n        </ion-buttons>\r\n    <ion-title text-center [innerHTML]=\"'Settings' | translate\"></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>  \r\n  <ion-item ion-button class=\"hydrated\">\r\n      <ion-avatar slot=\"start\" class=\"hydrated\" *ngIf=\"images.length !== 1\">\r\n        <img [src]=\"userimage\" >              \r\n      </ion-avatar>\r\n\r\n      <ion-label class=\"sc-ion-label-md-h sc-ion-label-md-s hydrated\" (click)=\"selectImage()\" *ngIf=\"desktop === false;\">\r\n          <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n          Select New Avatar            \r\n      </ion-label>  \r\n     \r\n      <ion-input type=\"file\" #imchnager (ionChange)=\"selectinputImage(imchnager.value)\" placeholder=\"Select New Avatar\" *ngIf=\"desktop === true;\" slot=\"end\"></ion-input>           \r\n  \r\n      <ion-list>\r\n          <ion-item *ngFor=\"let img of images; index as pos\" text-wrap>\r\n            <ion-thumbnail slot=\"start\">\r\n              <ion-img [src]=\"img.path\"></ion-img>\r\n            </ion-thumbnail>\r\n            <ion-button slot=\"end\" color=\"success\" fill=\"clear\" (click)=\"startUpload(img)\">\r\n              <ion-icon slot=\"icon-only\" name=\"checkmark-circle-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button slot=\"end\" color=\"danger\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\r\n              <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n        </ion-list>              \r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label [translate]=\"'Language'\"></ion-label>\r\n    <ion-select #LangChanger [value]=\"actualLanguage\" okText=\"Okay\" cancelText=\"Dismiss\" (ionChange)=\"onLangChange(LangChanger.value)\">\r\n      <ion-select-option [value]=\"lang.blang\" *ngFor=\"let lang of Langs; let i = index\">{{ lang.flag }} {{ lang.name }}</ion-select-option>      \r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"fixed\" slot=\"start\"><b [translate]=\"'Firstname'\"></b></ion-label>\r\n    <ion-input #ufname value=\"{{ firstname }}\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"fixed\" slot=\"start\"><b [translate]=\"'Lastname'\"></b></ion-label>\r\n    <ion-input #ulname value=\"{{ lastname }}\" ></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n      <ion-label position=\"fixed\" slot=\"start\"><b [translate]=\"'Nickname'\"></b></ion-label>\r\n    <ion-input #uuname value=\"{{ username }}\" ></ion-input>\r\n  </ion-item>\r\n  \r\n  <ion-button (click)=\"saveUserData(ufname.value, ulname.value, uuname.value)\" [translate]=\"'Save'\"></ion-button>        \r\n</ion-content> \r\n \r\n<!-- Tab bar -->\r\n<ion-tab-bar slot=\"bottom\" class=\"tbs-10\" style=\"max-height: 10%;\">\r\n  <ion-tab-button tab=\"dashboard\" [routerLink]=\"['/user']\">\r\n    <img src=\"/assets/icon/mypage.png\" style=\"width: 40px; height: 40px;\">\r\n  </ion-tab-button>\r\n  <ion-tab-button tab=\"account\" [routerLink]=\"['/family']\">\r\n    <img src=\"/assets/icon/family_blue.png\" style=\"width: 40px; height: 40px;\">\r\n  </ion-tab-button>\r\n  <ion-tab-button tab=\"contact\" [routerLink]=\"['/communication']\">\r\n    <img src=\"/assets/icon/communication_blue.png\" style=\"width: 40px; height: 40px;\">\r\n  </ion-tab-button>\r\n  <ion-tab-button tab=\"calendar\" [routerLink]=\"['/calendar']\">\r\n    <img src=\"/assets/icon/calendar_blue.png\" style=\"width: 40px; height: 40px;\">\r\n  </ion-tab-button>\r\n  <ion-tab-button tab=\"tracking\" [routerLink]=\"['/tracking']\">\r\n    <img src=\"/assets/icon/tracking2_blue.png\" style=\"width: 40px; height: 40px;\">\r\n  </ion-tab-button>\r\n  <ion-tab-button tab=\"settings\" [routerLink]=\"['/settings']\">\r\n    <img src=\"/assets/icon/settings_blue.png\" style=\"width: 40px; height: 40px;\">\r\n  </ion-tab-button>\r\n</ion-tab-bar>\r\n"

/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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











var STORAGE_KEY = 'my_images';
var SettingsPage = /** @class */ (function () {
    function SettingsPage(translate, camera, file, http, webview, actionSheetController, toastController, plt, loadingController, ref, filePath, authenticationService, userService) {
        this.translate = translate;
        this.camera = camera;
        this.file = file;
        this.http = http;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.plt = plt;
        this.loadingController = loadingController;
        this.ref = ref;
        this.filePath = filePath;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.images = [];
        this.userimage = '';
        this.user = '';
        this.desktop = false;
        this.Langs = [
            {
                name: 'Deutsch',
                blang: 'de-DE',
                flag: 'DE'
            },
            {
                name: 'English',
                blang: 'en-GB',
                flag: 'GB'
            },
            {
                name: 'Russian',
                blang: 'ru-RU',
                flag: 'RU'
            },
            {
                name: 'Armenian',
                blang: 'am-AM',
                flag: 'AM'
            }
        ];
        this.user = this.authenticationService.getUser();
        this.actualLanguage = localStorage.getItem('language');
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en-GB');
        console.log(translate.getBrowserCultureLang());
        console.log('Language from Browser:' + translate.getBrowserCultureLang());
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        if (localStorage.getItem('language') !== '') {
            translate.use(localStorage.getItem('language'));
        }
        else {
            if (translate.getBrowserCultureLang()) {
                translate.use(translate.getBrowserCultureLang());
                console.log('Language from Browser:' + translate.getBrowserCultureLang());
            }
            else {
                translate.use('en-GB');
                this.actualLanguage = 'en-GB';
            }
        }
    }
    SettingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.plt.ready().then(function () {
            console.log(_this.plt.platforms());
            if (_this.plt.is('cordova')) {
                console.warn('cordova');
                _this.desktop = false;
            }
            if (!_this.plt.is('cordova')) {
                console.warn('without cordova');
                _this.desktop = true;
            }
            _this.loadStoredImages();
        });
    };
    SettingsPage.prototype.loadStoredImages = function () {
        this.userimage = this.user['image'];
        this.firstname = this.user['firstname'];
        this.lastname = this.user['lastname'];
        this.username = this.user['name'];
    };
    SettingsPage.prototype.selectinputImage = function (value) {
        console.log(value);
        this.processFile(value);
    };
    SettingsPage.prototype.processFile = function (imageInput) {
        var file = imageInput;
        var reader = new FileReader();
        this.startUpload(file);
    };
    SettingsPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    SettingsPage.prototype.presentToast = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.selectImage = function () {
        this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
    };
    SettingsPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            if (_this.plt.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        });
    };
    SettingsPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + '.jpg';
        return newFileName;
    };
    SettingsPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            // this.updateStoredImages(newFileName);
            var filePath = _this.file.dataDirectory + newFileName;
            var resPath = _this.pathForImage(filePath);
            var newEntry = {
                name: newFileName,
                path: resPath,
                filePath: filePath
            };
            _this.presentToast(newFileName);
            _this.images = [newEntry].concat(_this.images);
            _this.ref.detectChanges(); // trigger change detection cycle
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    SettingsPage.prototype.deleteImage = function (imgEntry, position) {
        var _this = this;
        this.images.splice(position, 1);
        var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
        this.file.removeFile(correctPath, imgEntry.name).then(function (res) {
            _this.presentToast('File removed.');
        });
    };
    SettingsPage.prototype.startUpload = function (imgEntry) {
        var _this = this;
        this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
            .then(function (entry) {
            entry.file(function (file) { return _this.readFile(file); });
        })
            .catch(function (err) {
            _this.presentToast('Error while reading file.');
        });
    };
    SettingsPage.prototype.saveAvatar = function (avatar, user) {
        var _this = this;
        var fullFilePath = 'http://familyapp.arina-web-innovations.online/uploads/' + avatar;
        this.authenticationService.setUserAvatar(fullFilePath, user).subscribe(function (res) {
            var newEntry = {
                name: avatar,
                path: 'http://familyapp.arina-web-innovations.online/uploads/',
                filePath: fullFilePath
            };
            // this.images = [newEntry, ...this.images];
            _this.userimage = 'http://familyapp.arina-web-innovations.online/uploads/' + avatar;
            _this.user['image'] = _this.userimage;
            _this.authenticationService.setUser(_this.user);
            _this.ref.detectChanges(); // trigger change detection cycle
            return res['status'];
        });
    };
    SettingsPage.prototype.readFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var formData = new FormData();
            var imgBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('file', imgBlob, file.name);
            _this.uploadImageData(formData);
            _this.saveAvatar(file.name, _this.user['userid']);
        };
        reader.readAsArrayBuffer(file);
    };
    SettingsPage.prototype.uploadImageData = function (formData) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Uploading image...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.http.post('http://familyapp.arina-web-innovations.online/api/v1/uploadavatar.php', formData)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
                            loading.dismiss();
                        }))
                            .subscribe(function (res) {
                            if (res['success']) {
                                _this.presentToast('File upload complete.');
                            }
                            else {
                                _this.presentToast('File upload failed.');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.onLangChange = function (lang) {
        if (this.actualLanguage === null) {
            this.actualLanguage = 'en';
        }
        else {
            this.translate.use(lang);
        }
        localStorage.setItem('language', lang);
        this.actualLanguage = lang;
    };
    SettingsPage.prototype.saveFirstname = function (firstname, user) {
        var _this = this;
        this.userService.setUserFirstname(firstname, user).subscribe(function (res) {
            _this.user['firstname'] = firstname;
            _this.authenticationService.setUser(_this.user);
            _this.ref.detectChanges(); // trigger change detection cycle
            return res['status'];
        });
    };
    SettingsPage.prototype.saveLastname = function (lastname, user) {
        var _this = this;
        this.userService.setUserLastname(lastname, user).subscribe(function (res) {
            _this.user['lastname'] = lastname;
            _this.authenticationService.setUser(_this.user);
            _this.ref.detectChanges(); // trigger change detection cycle
            return res['status'];
        });
    };
    SettingsPage.prototype.saveUserData = function (firstname, lastname, nickname) {
        if (this.user['firstname'] !== firstname) {
            this.user['firstname'] = firstname;
            this.saveFirstname(firstname, this.user['userid']);
        }
        if (this.user['lastname'] !== lastname) {
            this.user['lstname'] = lastname;
            this.saveLastname(lastname, this.user['userid']);
        }
    };
    SettingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__["Camera"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_3__["File"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__["FilePath"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map