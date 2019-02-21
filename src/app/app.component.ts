import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { MenuController, AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  ActualPage = '';
  currentUser: any;
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
    // public push: Push,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nativeStorage: NativeStorage,
    public menuCtrl: MenuController,
    private router: Router,    
    public alertCtrl: AlertController,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.pages.map( p => {

          this.ActualPage = event.url;
          if(this.ActualPage === '/home' || this.ActualPage === '/login' || this.ActualPage === '/register') {
            this.menuCtrl.enable(false);
          } else {
            this.menuCtrl.enable(true);
          }
          return p['active'] = (event.url === p.url);
        });
      }
    });
    this.initializeApp();
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.currentUser = this.authenticationService.getUser();
      if (this.currentUser !== null ) {
        if (this.currentUser.userid ) {
          this.router.navigate(['/user']);
        }
      }

    });
  }

  saveDeviceToken(t) {
    localStorage.setItem('fcmtoken', t);
  }

}
