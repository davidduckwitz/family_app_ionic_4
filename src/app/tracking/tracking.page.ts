import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { TrackingService } from '../services/tracking.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AuthenticationService } from '../services/authentication.service';
import { ModalController, Platform } from '@ionic/angular';
declare var google: any;

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {

    @ViewChild('Map') mapElement: ElementRef;
    user: any;
    bounds: any;
    bouncingMarker: any;
    infoWindows = [];
    map: any;
    markers = [];
    mapOptions: any;
    location = {lat: 50.5822654, lng: 9.6260155};
    markerOptions: any = {position: null, map: null, title: null};
    gmapstyles = [{
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
    family_locations: any =[
      {
        location: {
          lat: 50.5824654, 
          lng: 9.6261155}
      },
      {
        location: {
          lat: 50.5824674, 
          lng: 9.6261155}
      }
    ];
    marker: any;
    apiKey: any = 'AIzaSyBZFiZ7q18GovYowVc_QmwUanvlQyEZJvo'; /*Your API Key*/

    constructor(public zone: NgZone, public geolocation: Geolocation,
      private trackingService: TrackingService,
      private authenticationService: AuthenticationService,
      private platform: Platform,
      private nativeStorage: NativeStorage) {

      /*load google map script dynamically */
        const script = document.createElement('script');
        script.id = 'googleMap';
        if (this.apiKey) {
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
        } else {
            script.src = 'https://maps.googleapis.com/maps/api/js?key=';
        }

        document.head.appendChild(script);
        /*Get Current location*/
        this.geolocation.getCurrentPosition().then((position) =>  {
            this.location.lat = position.coords.latitude;
            this.location.lng = position.coords.longitude;
        });
        
        /*Map options*/
        this.mapOptions = {
            center: this.location,
            zoom: 9,
            mapTypeControl: true,
            styles: this.gmapstyles
        };

        if(!this.platform.is('cordova')) {
          this.user = this.authenticationService.getUser();
        } else {
          this.nativeStorage.getItem('user')
          .then( data => {
            // user is previously logged and we have his data
            // we will let him access the app
            this.user = data;
          }, error => {});
        }
    }
    ngOnInit(){
        setTimeout(() => {
            this.initMap();
        }, 3000);
    }

    initMap() {
      this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
      /*Marker Options*/
      this.markerOptions.position = this.location;
      this.markerOptions.map = this.map;
      this.markerOptions.title = 'My Location';
      // this.marker = new google.maps.Marker(this.markerOptions);
      this.trackingService.getFamilyMemberLastPositions(1).subscribe(FamilyMemberLastPositions => {
        console.log(JSON.stringify(FamilyMemberLastPositions));
        //const fam = JSON.stringify(FamilyMemberLastPositions);
        const fam: any = FamilyMemberLastPositions;
        // Iterate trough my places / add marker & eventlistener
        for (let i = 0; i < fam.length; i++) {
          console.log('FAM', fam[i]);
          this.addMarker(fam[i].location, 'http://familyapp.arina-web-innovations.online' + fam[i].user.image);
        }
       });
        // Adds a marker at the center of the map.
        this.addMarker(this.location, 'http://familyapp.arina-web-innovations.online' + this.user.image);
      }

      locate() {
        this.geolocation.getCurrentPosition().then((resp) => {
          this.location.lat = resp.coords.latitude;
          this.location.lng = resp.coords.longitude;
          console.log( this.location.lat);

          let encodedLoation = JSON.stringify(this.location);
          this.trackingService.setNewPosition(this.user.userid, this.user.image, encodedLoation, 1).subscribe(messages => {
           // console.log(encodedLoation);
          });
          

          if ((!this.map.getBounds().contains(this.location))) { // Note the double &  
            this.map.setCenter(this.location);  
            // OR map.panTo(marker.getPosition());  
        }
        

         }).catch((error) => {
           console.log('Error getting location', error);
         });
      }

      bouncingListener(marker) {	
        if(marker.bouncingMarker){
          marker.bouncingMarker.setAnimation(null);
        }
        if(marker.bouncingMarker != this) {
          marker.setAnimation(google.maps.Animation.BOUNCE);
          marker.bouncingMarker = this;
        } else {
          marker.bouncingMarker = null;
        }
          console.log('Bouncing of Marker analyzed: Function "bouncingListener"');
      };

      // Adds a marker to the map and push to the array.
      addMarker(location, icon) {
        let infowindow = new google.maps.InfoWindow();
        let image = {
          url: icon,
          // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(50, 50),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 32)
        };
        let shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        };


        let marker = new google.maps.Marker({
          position: location,
          map: this.map

        });
        // This event listener will call addMarker() when the map is clicked.
        marker.addListener('click', function(event) {
          console.log(event);
          return function () {
            // closeAllInfoWindows();
            infowindow.setContent('loadInfoWindowContent(i, la, lo)');
            infowindow.open(this.map, event);
            this.bouncingListener(marker);
          }
        });
        this.infoWindows.push(infowindow);         
          this.bounds = new google.maps.LatLngBounds();	
        this.markers.push(marker);
        this.showMarkers();
        
      }

      // Sets the map on all markers in the array.
      setMapOnAll(map) {
        for (let i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(this.map);
        }
      }      

      // Removes the markers from the map, but keeps them in the array.
      clearMarkers() {
        this.setMapOnAll(null);
      }

      // Shows any markers currently in the array.
      showMarkers() {
        this.setMapOnAll(this.map);
      }

      // Deletes all markers in the array by removing references to them.
      deleteMarkers() {
        this.clearMarkers();
        this.markers = [];
      }

  }