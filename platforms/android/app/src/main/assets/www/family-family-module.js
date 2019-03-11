(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["family-family-module"],{

/***/ "./src/app/family/family.module.ts":
/*!*****************************************!*\
  !*** ./src/app/family/family.module.ts ***!
  \*****************************************/
/*! exports provided: FamilyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyPageModule", function() { return FamilyPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _family_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./family.page */ "./src/app/family/family.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _family_page__WEBPACK_IMPORTED_MODULE_5__["FamilyPage"]
    }
];
var FamilyPageModule = /** @class */ (function () {
    function FamilyPageModule() {
    }
    FamilyPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]],
            declarations: [_family_page__WEBPACK_IMPORTED_MODULE_5__["FamilyPage"]],
            entryComponents: []
        })
    ], FamilyPageModule);
    return FamilyPageModule;
}());



/***/ }),

/***/ "./src/app/family/family.page.html":
/*!*****************************************!*\
  !*** ./src/app/family/family.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent=\"\" class=\"header header-ios header-translucent header-translucent-ios hydrated\">\r\n  <ion-toolbar class=\"hydrated\" color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n        <ion-button expand=\"full\" (click)=\"enterFamilyHash()\" style=\"width:50px;\">\r\n          <ion-icon size=\"large\" name=\"code\">Enter Code</ion-icon>             \r\n        </ion-button>\r\n        <ion-button expand=\"full\" (click)=\"addFamilyModal()\" style=\"width:50px;\">\r\n          <ion-icon size=\"large\" name=\"add-circle-outline\">Add Family</ion-icon>             \r\n      </ion-button> \r\n      </ion-buttons>\r\n      <ion-title class=\"title-ios hydrated\" [innerHTML]=\"'Family' | translate\"></ion-title>\r\n      <ion-buttons slot=\"end\">       \r\n        <ion-button expand=\"full\" *ngIf=\"SelectedFamily > 0\" (click)=\"openAddMemberModal(SelectedFamily)\" style=\"width:50px\">\r\n          <ion-icon size=\"large\" name=\"person-add\">Add Member</ion-icon>              \r\n        </ion-button>                         \r\n      </ion-buttons>       \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>  \r\n  <ion-row>\r\n    <ion-col>\r\n        <ion-select #newFam placeholder=\"Select Your Family\" (ionChange)=\"onChangeNewfam($event)\">\r\n            <ion-select-option [value]=\"group.id\" *ngFor=\"let group of family\">\r\n              <span *ngIf=\"group.invite !== 'true'\">\r\n                {{ group.name }} ({{ group.hash }})\r\n              </span>\r\n              <span *ngIf=\"group.invite === 'true'\">\r\n                {{ group.name }} \r\n              </span>\r\n            </ion-select-option>                           \r\n          </ion-select>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n  <ion-col col-8>\r\n    <b [innerHTML]=\"'Family Quickselect' | translate\"></b>                      \r\n    <ion-button ion-button color=\"warning\" *ngFor=\"let group of family; let i = index\"  (click)=\"loadFamilyMembers(group.id)\">{{ i + 1 }}</ion-button>           \r\n    \r\n    <span *ngIf=\"familymembers.length === 0\" text-center>\r\n        <b [innerHTML]=\"'Family Invite Code:' | translate\"></b> {{ inviteCode }}\r\n      <ion-button tab=\"person-add\" *ngIf=\"SelectedFamily > 0\" (click)=\"openAddMemberModal(SelectedFamily)\">\r\n        <ion-icon style=\"height: 20px;\" name=\"person-add\"></ion-icon>          \r\n      </ion-button>              \r\n    </span>\r\n    <span *ngIf=\"familymembers.length > 0\" text-center>\r\n        <b [innerHTML]=\"'Family Invite Code:' | translate\"></b> {{ inviteCode }}             \r\n      </span>\r\n    <ion-item ion-button class=\"hydrated\" (click)=\"openModal(member)\" *ngFor=\"let member of familymembers\" detail>\r\n        <ion-avatar slot=\"start\" class=\"hydrated\">\r\n          <img [src]=\"member.image\" >              \r\n        </ion-avatar>\r\n        <ion-label class=\"sc-ion-label-md-h sc-ion-label-md-s hydrated\">\r\n          <h2>{{ member.firstname }} {{ member.lastname }} ( {{ member.username }} )</h2>            \r\n        </ion-label>              \r\n    </ion-item>    \r\n  </ion-col>\r\n  </ion-row>  \r\n</ion-content>\r\n\r\n  <!-- Tab bar -->\r\n  <ion-tab-bar slot=\"bottom\" class=\"tbs-10\" style=\"max-height: 10%;\">\r\n    <ion-tab-button tab=\"dashboard\" [routerLink]=\"['/user']\"> \r\n      <img src=\"/assets/icon/mypage.png\" style=\"width: 40px; height: 40px;\">\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"account\" [routerLink]=\"['/family']\">\r\n      <img src=\"/assets/icon/family_blue.png\" style=\"width: 40px; height: 40px;\">\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"contact\" [routerLink]=\"['/communication']\">\r\n      <img src=\"/assets/icon/communication_blue.png\" style=\"width: 40px; height: 40px;\">\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"calendar\" [routerLink]=\"['/calendar']\">\r\n      <img src=\"/assets/icon/calendar_blue.png\" style=\"width: 40px; height: 40px;\">\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"tracking\" [routerLink]=\"['/tracking']\">\r\n      <img src=\"/assets/icon/tracking2_blue.png\" style=\"width: 40px; height: 40px;\">\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"settings\" [routerLink]=\"['/settings']\">\r\n      <img src=\"/assets/icon/settings_blue.png\" style=\"width: 40px; height: 40px;\">\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n"

/***/ }),

/***/ "./src/app/family/family.page.scss":
/*!*****************************************!*\
  !*** ./src/app/family/family.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhbWlseS9mYW1pbHkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/family/family.page.ts":
/*!***************************************!*\
  !*** ./src/app/family/family.page.ts ***!
  \***************************************/
/*! exports provided: FamilyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyPage", function() { return FamilyPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _components_family_modal_family_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/family-modal/family-modal.component */ "./src/app/components/family-modal/family-modal.component.ts");
/* harmony import */ var _components_addtofamily_modal_addtofamily_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/addtofamily-modal/addtofamily-modal.component */ "./src/app/components/addtofamily-modal/addtofamily-modal.component.ts");
/* harmony import */ var _components_addfamily_modal_addfamily_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/addfamily-modal/addfamily-modal.component */ "./src/app/components/addfamily-modal/addfamily-modal.component.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _services_family_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/family.service */ "./src/app/services/family.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_tracking_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/tracking.service */ "./src/app/services/tracking.service.ts");
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










var FamilyPage = /** @class */ (function () {
    function FamilyPage(modalController, alertController, geolocation, familyService, authenticationService, platform, trackingService) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.geolocation = geolocation;
        this.familyService = familyService;
        this.authenticationService = authenticationService;
        this.platform = platform;
        this.trackingService = trackingService;
        this.Mylocation = '';
        this.SelectedFamily = 0;
        this.family = [];
        this.inviteCode = '';
        this.familymembers = [];
    }
    FamilyPage.prototype.ngOnInit = function () {
        this.user = this.authenticationService.getUser();
        this.loadFamily(this.user.userid);
    };
    FamilyPage.prototype.enterFamilyHash = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Family Code',
                            inputs: [
                                {
                                    name: 'hash',
                                    type: 'text',
                                    placeholder: 'Code'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (code) {
                                        console.log('Confirm Ok', code.hash);
                                        _this.addFamilyCode(code.hash);
                                    }
                                }
                            ]
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
    FamilyPage.prototype.addFamilyCode = function (hash) {
        var _this = this;
        this.familyService.addTamilyByHash(hash, this.user.userid).subscribe(function (response) {
            setTimeout(function () {
                _this.loadFamily(_this.user.userid);
            }, 2000);
        }, function (error) {
            console.log(error.status);
            _this.presentAlert('Success', error.status);
        });
    };
    FamilyPage.prototype.loadFamily = function (id) {
        var _this = this;
        this.familyService.getFamilysByUserId(id).subscribe(function (response) {
            _this.family = response;
            if (response[0].id) {
                _this.inviteCode = response[0].hash;
                _this.loadFamilyMembers(response[0].id);
            }
            else {
                _this.presentAlert('Success', 'You do not have any Familys yet, Create a Family to start...');
            }
        }, function (error) {
            console.log(error.status);
            _this.presentAlert('Success', error.status);
        });
    };
    FamilyPage.prototype.presentAlert = function (title, content) {
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
    FamilyPage.prototype.onChangeNewfam = function ($event) {
        this.loadFamilyMembers($event.detail.value);
    };
    FamilyPage.prototype.loadFamilyMembers = function (id) {
        var _this = this;
        this.SelectedFamily = id;
        this.familyService.getFamilymembersByUserId(id).subscribe(function (response) {
            _this.familymembers = response;
        }, function (error) {
            console.log(error.status);
            _this.presentAlert('Success', error.status);
        });
    };
    FamilyPage.prototype.openModal = function (value) {
        this.familyModal(value);
    };
    FamilyPage.prototype.openAddMemberModal = function (id) {
        this.addToFamilyModal(id);
    };
    FamilyPage.prototype.familyModal = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_family_modal_family_modal_component__WEBPACK_IMPORTED_MODULE_2__["FamilyModalComponent"],
                            componentProps: { value: value, currentuserId: this.user.userid }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FamilyPage.prototype.addToFamilyModal = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_addtofamily_modal_addtofamily_modal_component__WEBPACK_IMPORTED_MODULE_3__["AddtofamilyModalComponent"],
                            componentProps: { family_id: id }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (d) {
                            _this.loadFamily(_this.user.userid);
                            // this.addToFamilyModal(d);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FamilyPage.prototype.addFamilyModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_addfamily_modal_addfamily_modal_component__WEBPACK_IMPORTED_MODULE_4__["AddfamilyModalComponent"],
                            componentProps: { userid: this.user.userid }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (d) {
                            _this.loadFamily(_this.user.userid);
                            // this.addToFamilyModal(d);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FamilyPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-family',
            template: __webpack_require__(/*! ./family.page.html */ "./src/app/family/family.page.html"),
            styles: [__webpack_require__(/*! ./family.page.scss */ "./src/app/family/family.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
            _services_family_service__WEBPACK_IMPORTED_MODULE_6__["FamilyService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _services_tracking_service__WEBPACK_IMPORTED_MODULE_8__["TrackingService"]])
    ], FamilyPage);
    return FamilyPage;
}());



/***/ })

}]);
//# sourceMappingURL=family-family-module.js.map