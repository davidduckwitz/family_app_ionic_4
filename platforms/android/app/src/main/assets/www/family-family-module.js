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
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
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

module.exports = "<ion-header translucent=\"\" class=\"header header-ios header-translucent header-translucent-ios hydrated\">\n  <ion-toolbar class=\"hydrated\">\n    <ion-title class=\"title-ios hydrated\">Family</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Tab bar -->\n<ion-tab-bar slot=\"start\">  \n  <ion-tab-button tab=\"person-add\" *ngIf=\"SelectedFamily > 0\" (click)=\"openAddMemberModal(SelectedFamily)\">\n    <ion-icon style=\"height: 20px;\" name=\"person-add\"></ion-icon>\n      Familienmitglied hinzufügen\n  </ion-tab-button>\n  <ion-tab-button tab=\"add-family\" (click)=\"addFamilyModal()\">\n    <ion-icon style=\"height: 20px;\" name=\"person-add\"></ion-icon>\n     Neue Familie\n  </ion-tab-button>\n  <ion-tab-button tab=\"locate\" (click)=\"locate()\">\n    <ion-icon name=\"pin\"></ion-icon>\n    Position Senden<br>\n    {{ Mylocation }}\n  </ion-tab-button>\n  <ion-tab-button tab=\"settings\" [routerLink]=\"['/settings']\">\n    <ion-icon name=\"settings\"></ion-icon>\n    Familien Einstellungen\n  </ion-tab-button>\n</ion-tab-bar>\n\n<!-- Segment in a toolbar -->\n<ion-toolbar>\n        <ion-row>\n        <ion-col col-4>\n           <!-- Enter Code -->\n           <ion-input type=\"text\" placeholder=\"Family Code eingeben\" #familycode></ion-input>\n           <ion-button (click)=\"addFamilyCode(familycode.value)\">ENTER Family Code</ion-button>           \n           <ion-select #newFam placeholder=\"Select Your Family\" (ionChange)=\"onChangeNewfam($event)\">\n              <ion-select-option [value]=\"group.id\" *ngFor=\"let group of family\">\n\n                <span *ngIf=\"group.invite !== 'true'\">\n                  {{ group.name }} (CODE: {{ group.hash }})\n                </span>\n                <span *ngIf=\"group.invite === 'true'\">\n                  {{ group.name }} \n                </span>\n\n              </ion-select-option>                           \n            </ion-select>\n        </ion-col>\n        <ion-col col-8>\n          Family Quickselect                      \n          <button ion-button color=\"warning\" *ngFor=\"let group of family; let i = index\"  (click)=\"loadFamilyMembers(group.id)\">{{ i + 1 }}</button>           \n          <!-- Searchbar with value -->\n          <ion-searchbar value=\"Name\"></ion-searchbar>\n          <span *ngIf=\"familymembers.length === 0\">\n              <p>Add a member to your Family</p>\n              <p>\n                <ion-button tab=\"person-add\" *ngIf=\"SelectedFamily > 0\" (click)=\"openAddMemberModal(SelectedFamily)\">\n                  <ion-icon style=\"height: 20px;\" name=\"person-add\"></ion-icon>\n                    Familienmitglied hinzufügen\n                </ion-button>\n              </p>\n            </span>\n          <ion-item ion-button class=\"hydrated\" (click)=\"openModal(member)\" *ngFor=\"let member of familymembers\" detail>              \n              \n              <ion-avatar slot=\"start\" class=\"hydrated\">\n                <img [src]=\"member.image\" >              \n              </ion-avatar>\n              <ion-label class=\"sc-ion-label-md-h sc-ion-label-md-s hydrated\">\n                <h2>{{ member.firstname }} {{ member.lastname }}</h2>            \n              </ion-label> \n              \n          </ion-item>    \n        </ion-col>\n        </ion-row>\n</ion-toolbar>\n\n<ion-content padding>\n  <ion-row>  \n       \n  </ion-row>\n</ion-content>\n  <!-- Tab bar -->\n  <ion-tab-bar slot=\"bottom\" class=\"tbs-10\" style=\"max-height: 10%;\">\n    <ion-tab-button tab=\"dashboard\" [routerLink]=\"['/user']\"> \n      <img src=\"/assets/icon/mypage.png\" style=\"width: 40px; height: 40px;\">\n    </ion-tab-button>\n    <ion-tab-button tab=\"account\" [routerLink]=\"['/family']\">\n      <img src=\"/assets/icon/family_blue.png\" style=\"width: 40px; height: 40px;\">\n    </ion-tab-button>\n    <ion-tab-button tab=\"contact\" [routerLink]=\"['/communication']\">\n      <img src=\"/assets/icon/communication_blue.png\" style=\"width: 40px; height: 40px;\">\n    </ion-tab-button>\n    <ion-tab-button tab=\"calendar\" [routerLink]=\"['/calendar']\">\n      <img src=\"/assets/icon/calendar_blue.png\" style=\"width: 40px; height: 40px;\">\n    </ion-tab-button>\n    <ion-tab-button tab=\"tracking\" [routerLink]=\"['/tracking']\">\n      <img src=\"/assets/icon/tracking2_blue.png\" style=\"width: 40px; height: 40px;\">\n    </ion-tab-button>\n    <ion-tab-button tab=\"settings\" [routerLink]=\"['/settings']\">\n      <img src=\"/assets/icon/settings_blue.png\" style=\"width: 40px; height: 40px;\">\n    </ion-tab-button>\n  </ion-tab-bar>\n"

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
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _components_family_modal_family_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/family-modal/family-modal.component */ "./src/app/components/family-modal/family-modal.component.ts");
/* harmony import */ var _components_addtofamily_modal_addtofamily_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/addtofamily-modal/addtofamily-modal.component */ "./src/app/components/addtofamily-modal/addtofamily-modal.component.ts");
/* harmony import */ var _components_addfamily_modal_addfamily_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/addfamily-modal/addfamily-modal.component */ "./src/app/components/addfamily-modal/addfamily-modal.component.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _services_family_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/family.service */ "./src/app/services/family.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_tracking_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/tracking.service */ "./src/app/services/tracking.service.ts");
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
    function FamilyPage(modalController, alertController, geolocation, familyService, authenticationService, platform, trackingService, nativeStorage) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.geolocation = geolocation;
        this.familyService = familyService;
        this.authenticationService = authenticationService;
        this.platform = platform;
        this.trackingService = trackingService;
        this.nativeStorage = nativeStorage;
        this.Mylocation = '';
        this.SelectedFamily = 0;
        this.family = [];
        this.familymembers = [];
    }
    FamilyPage.prototype.ngOnInit = function () {
        this.user = this.authenticationService.getUser();
        this.loadFamily(this.user.userid);
    };
    FamilyPage.prototype.addFamilyCode = function (hash) {
        var _this = this;
        this.familyService.addTamilyByHash(hash, this.user.userid).subscribe(function (response) {
            _this.loadFamily(_this.user.userid);
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
    FamilyPage.prototype.locate = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.Mylocation.lat = resp.coords.latitude;
            _this.Mylocation.lng = resp.coords.longitude;
            var encodedLoation = JSON.stringify(_this.Mylocation);
            _this.trackingService.setNewPosition(_this.user.userid, _this.user.image, encodedLoation, _this.SelectedFamily)
                .subscribe(function (messages) {
                console.log(encodedLoation);
                _this.presentAlert('success', encodedLoation);
            });
        }).catch(function (error) {
            _this.presentAlert('danger', 'Error getting location' + error.status);
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
                            component: _components_family_modal_family_modal_component__WEBPACK_IMPORTED_MODULE_3__["FamilyModalComponent"],
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
                            component: _components_addtofamily_modal_addtofamily_modal_component__WEBPACK_IMPORTED_MODULE_4__["AddtofamilyModalComponent"],
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
                            component: _components_addfamily_modal_addfamily_modal_component__WEBPACK_IMPORTED_MODULE_5__["AddfamilyModalComponent"],
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
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
            _services_family_service__WEBPACK_IMPORTED_MODULE_7__["FamilyService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _services_tracking_service__WEBPACK_IMPORTED_MODULE_9__["TrackingService"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"]])
    ], FamilyPage);
    return FamilyPage;
}());



/***/ })

}]);
//# sourceMappingURL=family-family-module.js.map