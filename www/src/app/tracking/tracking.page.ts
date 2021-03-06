import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { TrackingService } from '../services/tracking.service';
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
    family_locations: any = [
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
      private platform: Platform) {

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
    }
    ngOnInit() {
      this.user = this.authenticationService.getUser();
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
      this.trackingService.getFamilyMemberLastPositions(0, this.user.userid).subscribe(FamilyMemberLastPositions => {
        // const fam = JSON.stringify(FamilyMemberLastPositions);
        const fam: any = FamilyMemberLastPositions;
        // Iterate trough my places / add marker & eventlistener
        for (let i = 0; i < fam.length; i++) {
          this.addMarker(fam[i].location, 'http://familyapp.arina-web-innovations.online' + fam[i].image);
        }
       });
        // Adds a marker at the center of the map.
        this.addMarker(this.location, 'http://familyapp.arina-web-innovations.online/assets/icon/gmaps_icon_big.png');
      }

      locate() {
        this.geolocation.getCurrentPosition().then((resp) => {
          this.location.lat = resp.coords.latitude;
          this.location.lng = resp.coords.longitude;
          const encodedLoation = JSON.stringify(this.location);
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
        if (marker.bouncingMarker) {
          marker.bouncingMarker.setAnimation(null);
        }
        if (marker.bouncingMarker !== this) {
          marker.setAnimation(google.maps.Animation.BOUNCE);
          marker.bouncingMarker = this;
        } else {
          marker.bouncingMarker = null;
        }
          console.log('Bouncing of Marker analyzed: Function "bouncingListener"');
      }

      // Adds a marker to the map and push to the array.
      addMarker(location, icon) {
        const infowindow = new google.maps.InfoWindow();
        const Myicon = new google.maps.MarkerImage(icon, null, null, null, new google.maps.Size(100, 100));
        const marker = new google.maps.Marker({
          position: location,
          title: 'Snazzy!',
          map: this.map,
          icon: Myicon
        });
        // This event listener will call addMarker() when the map is clicked.
        marker.addListener('click', function(event) {
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
