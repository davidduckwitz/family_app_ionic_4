import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  ActualPage = "";
  pages = [
    {
      title: 'Dashboard',
      url: '/user'
    },
    {
      title: 'Familie',
      url: '/family'
    },
    {
      title: 'Kommunikation',
      url: '/communication'
    },
    {
      title: 'Kalender',
      url: '/calendar'
    },
    {
      title: 'Tracking (PRO)',
      url: '/tracking'
    },
    {
      title: 'Einstellungen',
      url: '/settings'
    }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nativeStorage: NativeStorage,
    public menuCtrl: MenuController,
    private router: Router
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.pages.map( p => {

          this.ActualPage = event.url;
          if(this.ActualPage === "/home" || this.ActualPage === "/login" || this.ActualPage === "/register"){
            this.menuCtrl.enable(false);
            console.log("NOT Show Menu");
          } else {
            this.menuCtrl.enable(false);
            console.log("Show Menu");
          }

          return p['active'] = (event.url === p.url);
        });
      }
     
    });
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //Here we will check if the user is already logged in
      //because we don't want to ask users to log in each time they open the app
      this.nativeStorage.getItem('user')
      .then( data => {
        //user is previously logged and we have his data
        //we will let him access the app
        this.router.navigate(["/user"]);
        this.splashScreen.hide();
      }, err => {
        this.router.navigate(["/home"]);
        this.splashScreen.hide();
      })
      this.statusBar.styleDefault();
    });
  }
}
