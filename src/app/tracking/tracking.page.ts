import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
declare var google: any;

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {

    @ViewChild('Map') mapElement: ElementRef;
    map: any;
    markers = [];
    mapOptions: any;
    location = {lat: 50.5822654, lng: 9.6260155};
    markerOptions: any = {position: null, map: null, title: null};
    marker: any;
    apiKey: any = 'AIzaSyBZFiZ7q18GovYowVc_QmwUanvlQyEZJvo'; /*Your API Key*/

    constructor(public zone: NgZone, public geolocation: Geolocation) {

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
            zoom: 21,
            mapTypeControl: false
        };        
    }
    ngOnInit(){
        setTimeout(() => {
            this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
            /*Marker Options*/
            this.markerOptions.position = this.location;
            this.markerOptions.map = this.map;
            this.markerOptions.title = 'My Location';
            // this.marker = new google.maps.Marker(this.markerOptions);
            this.initMap();
        }, 3000);
    }

    initMap() {        

        // This event listener will call addMarker() when the map is clicked.
        this.map.addListener('click', function(event) {
          this.addMarker(event.latLng);
        });

        // Adds a marker at the center of the map.
        this.addMarker(this.location);
      }

      locate() {
        this.geolocation.getCurrentPosition().then((resp) => {
          this.location.lat = resp.coords.latitude;
          this.location.lng = resp.coords.longitude;
          console.log( this.location.lat);

          if ((!this.map.getBounds().contains(this.marker.getPosition()))) { //Note the double &  
            this.map.setCenter(this.location);  
            //OR map.panTo(marker.getPosition());  
        }

         }).catch((error) => {
           console.log('Error getting location', error);
         });
      }

      // Adds a marker to the map and push to the array.
      addMarker(location) {
        let marker = new google.maps.Marker({
          position: location,
          map: this.map
        });
        this.markers.push(marker);
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