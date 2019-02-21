(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["communication-communication-module"],{

/***/ "./src/app/communication/communication.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/communication/communication.module.ts ***!
  \*******************************************************/
/*! exports provided: CommunicationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationPageModule", function() { return CommunicationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _communication_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./communication.page */ "./src/app/communication/communication.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _communication_page__WEBPACK_IMPORTED_MODULE_5__["CommunicationPage"]
    }
];
var CommunicationPageModule = /** @class */ (function () {
    function CommunicationPageModule() {
    }
    CommunicationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_communication_page__WEBPACK_IMPORTED_MODULE_5__["CommunicationPage"]]
        })
    ], CommunicationPageModule);
    return CommunicationPageModule;
}());



/***/ }),

/***/ "./src/app/communication/communication.page.html":
/*!*******************************************************!*\
  !*** ./src/app/communication/communication.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>    \n  <ion-toolbar>\n      <ion-title slot=\"start\">Communication</ion-title>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>New Conversation</ion-label>\n    <ion-select #newConv placeholder=\"Select Familymember\" (ionChange)=\"onChangeNewConv(newConv.value)\" >\n      <ion-select-option value=\"4\" >Arina Amirian</ion-select-option>\n      <ion-select-option value=\"1\">Dave No. 1</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-row>\n    <ion-col>\n      <ion-item (click)=\"chatModal(conversation.conversation_id, conversation.userid, currentUser.userid)\" *ngFor=\"let conversation of conversations\">\n        <ion-avatar item-left>\n          <img [src]=\"conversation.image\" *ngIf=\"conversation.image\">\n        </ion-avatar>\n      <h2>{{conversation.firstname}} {{conversation.lastname}}</h2>\n      <p slot=\"end\">{{ conversation.message_text }}</p>\n      </ion-item>         \n    </ion-col>\n  </ion-row>\n</ion-content>\n\n  <!-- Tab bar -->\n  <ion-tab-bar slot=\"bottom\" class=\"tbs-10\" style=\"max-height: 10%;\">\n    <ion-tab-button tab=\"dashboard\" [routerLink]=\"['/user']\">\n      <img src=\"/assets/icon/mypage.png\" style=\"width: 40px; height: 40px;\">\n    </ion-tab-button>\n    <ion-tab-button tab=\"account\" [routerLink]=\"['/family']\">\n      <img src=\"/assets/icon/family_blue.png\" style=\"width: 40px; height: 40px;\">\n    </ion-tab-button>\n    <ion-tab-button tab=\"contact\" [routerLink]=\"['/communication']\">\n      <img src=\"/assets/icon/communication_blue.png\" style=\"width: 40px; height: 40px;\">\n    </ion-tab-button>\n    <ion-tab-button tab=\"calendar\" [routerLink]=\"['/calendar']\">\n      <img src=\"/assets/icon/calendar_blue.png\" style=\"width: 40px; height: 40px;\">\n    </ion-tab-button>\n    <ion-tab-button tab=\"tracking\" [routerLink]=\"['/tracking']\">\n      <img src=\"/assets/icon/tracking2_blue.png\" style=\"width: 40px; height: 40px;\">\n    </ion-tab-button>\n    <ion-tab-button tab=\"settings\" [routerLink]=\"['/settings']\">\n      <img src=\"/assets/icon/settings_blue.png\" style=\"width: 40px; height: 40px;\">\n    </ion-tab-button>\n  </ion-tab-bar>\n "

/***/ }),

/***/ "./src/app/communication/communication.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/communication/communication.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content .scroll-content {\n  background-color: #f5f5f5; }\n\nion-footer {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.11);\n  background-color: #fff;\n  height: 255px; }\n\n.line-breaker {\n  white-space: pre-line; }\n\n.input-wrap {\n  padding: 5px;\n  display: flex; }\n\n.input-wrap textarea {\n  flex: 1;\n  border: 0;\n  border-bottom: 1px #387ef5;\n  border-style: solid; }\n\n.message-wrap {\n  padding: 0 10px; }\n\n.message-wrap .message {\n  position: relative;\n  padding: 7px 0; }\n\n.message-wrap .message .user-img {\n  position: absolute;\n  border-radius: 45px;\n  width: 45px;\n  height: 45px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36); }\n\n.message-wrap .message .msg-detail {\n  width: 100%;\n  display: inline-block; }\n\n.message-wrap .message .msg-detail p {\n  margin: 0; }\n\n.message-wrap .message .msg-detail .msg-info p {\n  font-size: .8em;\n  color: #888; }\n\n.message-wrap .message .msg-detail .msg-content {\n  position: relative;\n  margin-top: 5px;\n  border-radius: 5px;\n  padding: 8px;\n  border: 1px solid #ddd;\n  color: #fff;\n  width: auto;\n  max-width: 80%; }\n\n.message-wrap .message .msg-detail .msg-content span.triangle {\n  background-color: #fff;\n  border-radius: 2px;\n  height: 8px;\n  width: 8px;\n  top: 12px;\n  display: block;\n  border-style: solid;\n  border-color: #ddd;\n  border-width: 1px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  position: absolute; }\n\n.message-wrap .message.left .msg-content {\n  background-color: #fff;\n  float: left; }\n\n.message-wrap .message.left .msg-detail {\n  padding-left: 60px; }\n\n.message-wrap .message.left .user-img {\n  left: 0; }\n\n.message-wrap .message.left .msg-detail .msg-content {\n  color: #343434; }\n\n.message-wrap .message.left .msg-detail .msg-content span.triangle {\n  border-top-width: 0;\n  border-right-width: 0;\n  left: -5px; }\n\n.message-wrap .message.right .msg-detail {\n  padding-right: 60px; }\n\n.message-wrap .message.right .msg-detail .msg-info {\n  text-align: right; }\n\n.message-wrap .message.right .user-img {\n  right: 0; }\n\n.message-wrap .message.right ion-spinner {\n  position: absolute;\n  right: 10px;\n  top: 50px; }\n\n.message-wrap .message.right .msg-detail .msg-content {\n  background-color: #387ef5;\n  float: right; }\n\n.message-wrap .message.right .msg-detail .msg-content span.triangle {\n  background-color: #387ef5;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  right: -5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbXVuaWNhdGlvbi9HOlxcYW5kcm9pZFxcZmFtaWx5X2FwcF9pb25pY180L3NyY1xcYXBwXFxjb21tdW5pY2F0aW9uXFxjb21tdW5pY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHVDQUF1QztFQUN2QyxzQkFBc0I7RUFDdEIsYUFBYSxFQUFBOztBQUVmO0VBQ0UscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFDYjtFQUNFLE9BQU87RUFDUCxTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLG1CQUFtQixFQUFBOztBQUV2QjtFQUNFLGVBQWUsRUFBQTs7QUFDZjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBQ2Q7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUNBQXVDLEVBQUE7O0FBQ3pDO0VBQ0UsV0FBVztFQUNYLHFCQUFxQixFQUFBOztBQUNyQjtFQUNFLFNBQVMsRUFBQTs7QUFDWDtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBQ2I7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUNkO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFDVCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixrQkFBa0IsRUFBQTs7QUFDMUI7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVyxFQUFBOztBQUNiO0VBQ0Usa0JBQWtCLEVBQUE7O0FBQ3BCO0VBQ0UsT0FBTyxFQUFBOztBQUNUO0VBQ0UsY0FBYyxFQUFBOztBQUNkO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixVQUFVLEVBQUE7O0FBQ2Q7RUFDRSxtQkFBbUIsRUFBQTs7QUFDbkI7RUFDRSxpQkFBaUIsRUFBQTs7QUFDckI7RUFDRSxRQUFRLEVBQUE7O0FBQ1Y7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVMsRUFBQTs7QUFDWDtFQUNFLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBQ1o7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21tdW5pY2F0aW9uL2NvbW11bmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgLnNjcm9sbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7IH1cclxuICBcclxuICBpb24tZm9vdGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjExKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDI1NXB4OyB9XHJcbiAgXHJcbiAgLmxpbmUtYnJlYWtlciB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7IH1cclxuICBcclxuICAuaW5wdXQtd3JhcCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyB9XHJcbiAgICAuaW5wdXQtd3JhcCB0ZXh0YXJlYSB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4ICMzODdlZjU7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7IH1cclxuICBcclxuICAubWVzc2FnZS13cmFwIHtcclxuICAgIHBhZGRpbmc6IDAgMTBweDsgfVxyXG4gICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZzogN3B4IDA7IH1cclxuICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAudXNlci1pbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4zNik7IH1cclxuICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XHJcbiAgICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDsgfVxyXG4gICAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgLm1zZy1pbmZvIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgICAgICAgY29sb3I6ICM4ODg7IH1cclxuICAgICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIG1heC13aWR0aDogODAlOyB9XHJcbiAgICAgICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCBzcGFuLnRyaWFuZ2xlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgdG9wOiAxMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZGRkO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB9XHJcbiAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1jb250ZW50IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgZmxvYXQ6IGxlZnQ7IH1cclxuICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UubGVmdCAubXNnLWRldGFpbCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNjBweDsgfVxyXG4gICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC51c2VyLWltZyB7XHJcbiAgICAgIGxlZnQ6IDA7IH1cclxuICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UubGVmdCAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQge1xyXG4gICAgICBjb2xvcjogIzM0MzQzNDsgfVxyXG4gICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHNwYW4udHJpYW5nbGUge1xyXG4gICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xyXG4gICAgICAgIGxlZnQ6IC01cHg7IH1cclxuICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4OyB9XHJcbiAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwgLm1zZy1pbmZvIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxyXG4gICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5yaWdodCAudXNlci1pbWcge1xyXG4gICAgICByaWdodDogMDsgfVxyXG4gICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5yaWdodCBpb24tc3Bpbm5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHRvcDogNTBweDsgfVxyXG4gICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5yaWdodCAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3ZWY1O1xyXG4gICAgICBmbG9hdDogcmlnaHQ7IH1cclxuICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5yaWdodCAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQgc3Bhbi50cmlhbmdsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAtNXB4OyB9Il19 */"

/***/ }),

/***/ "./src/app/communication/communication.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/communication/communication.page.ts ***!
  \*****************************************************/
/*! exports provided: CommunicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationPage", function() { return CommunicationPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/messages.service */ "./src/app/services/messages.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _components_chat_modal_chat_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/chat-modal/chat-modal.component */ "./src/app/components/chat-modal/chat-modal.component.ts");
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







// import { Events, Content } from '@ionic-native';
var CommunicationPage = /** @class */ (function () {
    function CommunicationPage(messagesService, authenticationService, modalController, alertController, activatedRoute, platform, nativeStorage) {
        this.messagesService = messagesService;
        this.authenticationService = authenticationService;
        this.modalController = modalController;
        this.alertController = alertController;
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.nativeStorage = nativeStorage;
    }
    CommunicationPage.prototype.ngOnInit = function () {
        this.currentUser = this.authenticationService.getUser();
        this.getConversationsByUserId(this.currentUser.userid);
    };
    CommunicationPage.prototype.getConversationsByUserId = function (id) {
        var _this = this;
        this.messagesService.getConversationsByUserId(id).subscribe(function (conversations) {
            _this.conversations = conversations;
        });
    };
    CommunicationPage.prototype.onChangeNewConv = function (to_user_id) {
        var _this = this;
        this.messagesService.createConversation(this.currentUser.userid, to_user_id).subscribe(function (conversations) {
            if (_this.currentUser.userid > 0) {
                _this.getConversationsByUserId(_this.currentUser.userid);
            }
            else {
                _this.getConversationsByUserId(2);
            }
            console.log(conversations);
            _this.chatModal(conversations['conversationid'], to_user_id);
        });
    };
    CommunicationPage.prototype.chatModal = function (conversationid, touserid) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.to_user_id = touserid;
                        return [4 /*yield*/, this.modalController.create({
                                component: _components_chat_modal_chat_modal_component__WEBPACK_IMPORTED_MODULE_5__["ChatModalComponent"],
                                componentProps: {
                                    conversation_id: conversationid,
                                    from_user_id: this.currentUser.id,
                                    to_user_id: touserid
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CommunicationPage.prototype.presentAlert = function (title, content) {
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
    CommunicationPage.prototype.presentLoading = function (loading) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CommunicationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-communication',
            template: __webpack_require__(/*! ./communication.page.html */ "./src/app/communication/communication.page.html"),
            styles: [__webpack_require__(/*! ./communication.page.scss */ "./src/app/communication/communication.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"]])
    ], CommunicationPage);
    return CommunicationPage;
}());



/***/ })

}]);
//# sourceMappingURL=communication-communication-module.js.map