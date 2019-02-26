(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tracking-tracking-module"],{

/***/ "./src/app/tracking/tracking.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tracking/tracking.module.ts ***!
  \*********************************************/
/*! exports provided: TrackingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingPageModule", function() { return TrackingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _tracking_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tracking.page */ "./src/app/tracking/tracking.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _tracking_page__WEBPACK_IMPORTED_MODULE_5__["TrackingPage"]
    }
];
var TrackingPageModule = /** @class */ (function () {
    function TrackingPageModule() {
    }
    TrackingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tracking_page__WEBPACK_IMPORTED_MODULE_5__["TrackingPage"]]
        })
    ], TrackingPageModule);
    return TrackingPageModule;
}());



/***/ }),

/***/ "./src/app/tracking/tracking.page.html":
/*!*********************************************!*\
  !*** ./src/app/tracking/tracking.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>tracking: {{location.lat}} {{location.lng}}</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>               \r\n      </ion-buttons>\r\n    <ion-button color=\"danger\" expand=\"block\" (click)=\"locate()\">\r\n        Meine Position\r\n      </ion-button>\r\n  </ion-toolbar>  \r\n</ion-header>\r\n\r\n <!--create a element for map. #Map - identifier -->  \r\n <div #Map class=\"map\"></div>\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col>\r\n     \r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n\r\n\r\n  <!-- Tab bar -->\r\n  <ion-tab-bar slot=\"bottom\" class=\"tbs-10\" style=\"max-height: 10%;\">\r\n    <ion-tab-button tab=\"dashboard\" [routerLink]=\"['/user']\">\r\n      <img src=\"/assets/icon/mypage.png\" style=\"width: 40px; height: 40px;\">\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"account\" [routerLink]=\"['/family']\">\r\n      <img src=\"/assets/icon/family_blue.png\" style=\"width: 40px; height: 40px;\">\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"contact\" [routerLink]=\"['/communication']\">\r\n      <img src=\"/assets/icon/communication_blue.png\" style=\"width: 40px; height: 40px;\">\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"calendar\" [routerLink]=\"['/calendar']\">\r\n      <img src=\"/assets/icon/calendar_blue.png\" style=\"width: 40px; height: 40px;\">\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"tracking\" [routerLink]=\"['/tracking']\">\r\n      <img src=\"/assets/icon/tracking2_blue.png\" style=\"width: 40px; height: 40px;\">\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"settings\" [routerLink]=\"['/settings']\">\r\n      <img src=\"/assets/icon/settings_blue.png\" style=\"width: 40px; height: 40px;\">\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n"

/***/ }),

/***/ "./src/app/tracking/tracking.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tracking/tracking.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  height: 85%; }\n\n.tbs-10 {\n  height: 15%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhY2tpbmcvRzpcXGFuZHJvaWRcXGZhbWlseV9uZXcvc3JjXFxhcHBcXHRyYWNraW5nXFx0cmFja2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90cmFja2luZy90cmFja2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwe1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgICBcclxuICB9XHJcbi50YnMtMTB7XHJcbiAgaGVpZ2h0OiAxNSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tracking/tracking.page.ts":
/*!*******************************************!*\
  !*** ./src/app/tracking/tracking.page.ts ***!
  \*******************************************/
/*! exports provided: TrackingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingPage", function() { return TrackingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _services_tracking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tracking.service */ "./src/app/services/tracking.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrackingPage = /** @class */ (function () {
    function TrackingPage(zone, geolocation, trackingService, authenticationService, platform) {
        var _this = this;
        this.zone = zone;
        this.geolocation = geolocation;
        this.trackingService = trackingService;
        this.authenticationService = authenticationService;
        this.platform = platform;
        this.infoWindows = [];
        this.markers = [];
        this.location = { lat: 50.5822654, lng: 9.6260155 };
        this.markerOptions = { position: null, map: null, title: null };
        this.gmapstyles = [{
                'featureType': 'administrative.country',
                'elementType': 'geometry.fill',
                'stylers': [{
                        'visibility': 'on'
                    }, {
                        'color': '#e9b3b3'
                    }
                ]
            }, {
                'featureType': 'administrative.country',
                'elementType': 'labels.text',
                'stylers': [{
                        'visibility': 'on'
                    }, {
                        'color': '#f49d9d'
                    }
                ]
            }, {
                'featureType': 'administrative.country',
                'elementType': 'labels.text.stroke',
                'stylers': [{
                        'color': '#ffffff'
                    }
                ]
            }, {
                'featureType': 'administrative.province',
                'elementType': 'geometry.fill',
                'stylers': [{
                        'color': '#f7f2f2'
                    }
                ]
            }, {
                'featureType': 'administrative.province',
                'elementType': 'labels.text',
                'stylers': [{
                        'hue': '#f7f2f2'
                    }
                ]
            }, {
                'featureType': 'administrative.province',
                'elementType': 'labels.text.fill',
                'stylers': [{
                        'color': '#ff9696'
                    }
                ]
            }, {
                'featureType': 'administrative.locality',
                'elementType': 'all',
                'stylers': [{
                        'color': '#ffffff'
                    }
                ]
            }, {
                'featureType': 'administrative.locality',
                'elementType': 'geometry',
                'stylers': [{
                        'color': '#f3f3f3'
                    }
                ]
            }, {
                'featureType': 'administrative.locality',
                'elementType': 'geometry.fill',
                'stylers': [{
                        'color': '#f5f5f5'
                    }
                ]
            }, {
                'featureType': 'administrative.locality',
                'elementType': 'labels.text.fill',
                'stylers': [{
                        'color': '#eb8d8d'
                    }
                ]
            }, {
                'featureType': 'administrative.land_parcel',
                'elementType': 'geometry.fill',
                'stylers': [{
                        'color': '#f7f2f2'
                    }
                ]
            }, {
                'featureType': 'landscape.man_made',
                'elementType': 'geometry.fill',
                'stylers': [{
                        'color': '#f7f2f2'
                    }
                ]
            }, {
                'featureType': 'landscape.natural',
                'elementType': 'geometry.fill',
                'stylers': [{
                        'color': '#f7f2f2'
                    }
                ]
            }, {
                'featureType': 'landscape.natural.terrain',
                'elementType': 'geometry',
                'stylers': [{
                        'color': '#f7f2f2'
                    }
                ]
            }, {
                'featureType': 'poi',
                'elementType': 'geometry.fill',
                'stylers': [{
                        'color': '#f7f2f2'
                    }
                ]
            }, {
                'featureType': 'poi',
                'elementType': 'labels.text.fill',
                'stylers': [{
                        'hue': '#ff0000'
                    }
                ]
            }, {
                'featureType': 'poi.park',
                'elementType': 'geometry',
                'stylers': [{
                        'color': '#f7f2f2'
                    }
                ]
            }, {
                'featureType': 'poi.park',
                'elementType': 'labels.text.fill',
                'stylers': [{
                        'color': '#ada5a5'
                    }
                ]
            }, {
                'featureType': 'road',
                'elementType': 'geometry',
                'stylers': [{
                        'lightness': 50
                    }, {
                        'visibility': 'simplified'
                    }, {
                        'color': '#fad2d2'
                    }
                ]
            }, {
                'featureType': 'road',
                'elementType': 'labels',
                'stylers': [{
                        'visibility': 'on'
                    }
                ]
            }, {
                'featureType': 'water',
                'elementType': 'geometry.fill',
                'stylers': [{
                        'color': '#f7f2f2'
                    }
                ]
            }
        ];
        this.family_locations = [
            {
                location: {
                    lat: 50.5824654,
                    lng: 9.6261155
                }
            },
            {
                location: {
                    lat: 50.5824674,
                    lng: 9.6261155
                }
            }
        ];
        this.apiKey = 'AIzaSyBZFiZ7q18GovYowVc_QmwUanvlQyEZJvo'; /*Your API Key*/
        /*load google map script dynamically */
        var script = document.createElement('script');
        script.id = 'googleMap';
        if (this.apiKey) {
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
        }
        else {
            script.src = 'https://maps.googleapis.com/maps/api/js?key=';
        }
        document.head.appendChild(script);
        /*Get Current location*/
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.location.lat = position.coords.latitude;
            _this.location.lng = position.coords.longitude;
        });
        /*Map options*/
        this.mapOptions = {
            center: this.location,
            zoom: 9,
            mapTypeControl: true,
            styles: this.gmapstyles
        };
    }
    TrackingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authenticationService.getUser();
        setTimeout(function () {
            _this.initMap();
        }, 3000);
    };
    TrackingPage.prototype.initMap = function () {
        var _this = this;
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
        /*Marker Options*/
        this.markerOptions.position = this.location;
        this.markerOptions.map = this.map;
        this.markerOptions.title = 'My Location';
        // this.marker = new google.maps.Marker(this.markerOptions);
        this.trackingService.getFamilyMemberLastPositions(0, this.user.userid).subscribe(function (FamilyMemberLastPositions) {
            // const fam = JSON.stringify(FamilyMemberLastPositions);
            var fam = FamilyMemberLastPositions;
            // Iterate trough my places / add marker & eventlistener
            for (var i = 0; i < fam.length; i++) {
                _this.addMarker(fam[i].location, 'http://familyapp.arina-web-innovations.online' + fam[i].image);
            }
        });
        // Adds a marker at the center of the map.
        this.addMarker(this.location, 'http://familyapp.arina-web-innovations.online/assets/icon/gmaps_icon_big.png');
    };
    TrackingPage.prototype.locate = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.location.lat = resp.coords.latitude;
            _this.location.lng = resp.coords.longitude;
            var encodedLoation = JSON.stringify(_this.location);
            _this.trackingService.setNewPosition(_this.user.userid, _this.user.image, encodedLoation, 1).subscribe(function (messages) {
                // console.log(encodedLoation);
            });
            if ((!_this.map.getBounds().contains(_this.location))) { // Note the double &
                _this.map.setCenter(_this.location);
                // OR map.panTo(marker.getPosition());
            }
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    TrackingPage.prototype.bouncingListener = function (marker) {
        if (marker.bouncingMarker) {
            marker.bouncingMarker.setAnimation(null);
        }
        if (marker.bouncingMarker !== this) {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            marker.bouncingMarker = this;
        }
        else {
            marker.bouncingMarker = null;
        }
        console.log('Bouncing of Marker analyzed: Function "bouncingListener"');
    };
    // Adds a marker to the map and push to the array.
    TrackingPage.prototype.addMarker = function (location, icon) {
        var infowindow = new google.maps.InfoWindow();
        var Myicon = new google.maps.MarkerImage(icon, null, null, null, new google.maps.Size(100, 100));
        var marker = new google.maps.Marker({
            position: location,
            title: 'Snazzy!',
            map: this.map,
            icon: Myicon
        });
        // This event listener will call addMarker() when the map is clicked.
        marker.addListener('click', function (event) {
            return function () {
                // closeAllInfoWindows();
                infowindow.setContent('loadInfoWindowContent(i, la, lo)');
                infowindow.open(this.map, event);
                this.bouncingListener(marker);
            };
        });
        this.infoWindows.push(infowindow);
        this.bounds = new google.maps.LatLngBounds();
        this.markers.push(marker);
        this.showMarkers();
    };
    // Sets the map on all markers in the array.
    TrackingPage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(this.map);
        }
    };
    // Removes the markers from the map, but keeps them in the array.
    TrackingPage.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    // Shows any markers currently in the array.
    TrackingPage.prototype.showMarkers = function () {
        this.setMapOnAll(this.map);
    };
    // Deletes all markers in the array by removing references to them.
    TrackingPage.prototype.deleteMarkers = function () {
        this.clearMarkers();
        this.markers = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Map'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TrackingPage.prototype, "mapElement", void 0);
    TrackingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tracking',
            template: __webpack_require__(/*! ./tracking.page.html */ "./src/app/tracking/tracking.page.html"),
            styles: [__webpack_require__(/*! ./tracking.page.scss */ "./src/app/tracking/tracking.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__["Geolocation"],
            _services_tracking_service__WEBPACK_IMPORTED_MODULE_2__["TrackingService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], TrackingPage);
    return TrackingPage;
}());



/***/ })

}]);
//# sourceMappingURL=tracking-tracking-module.js.map