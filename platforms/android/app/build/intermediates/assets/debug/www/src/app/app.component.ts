import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
// import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { MenuController, AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { FiremessagingService } from './services/firemessaging.service';
import { TranslateService } from '@ngx-translate/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  ActualPage = '';
  currentUser: any;
  pages = [
    {
      title: 'Dashboard',
      url: '/user',
      photo: '/assets/icon/mypage.png'
    },
    {
      title: 'Family',
      url: '/family',
      photo: '/assets/icon/family_blue.png'

     },
    {
      title: 'Communication',
      url: '/communication',
      photo: '/assets/icon/communication_blue.png'

    },
    {
      title: 'Calendar',
      url: '/calendar',
      photo: '/assets/icon/calendar_blue.png'


    },
    {
      title: 'Tracking',
      url: '/tracking',
      photo: '/assets/icon/tracking2_blue.png'

    },
    {
      title: 'Settings',
      url: '/settings',
      photo: '/assets/icon/settings_blue.png'
    },
    {
      title: 'Logout',
      url: '/login',
      photo: '/assets/icon/logout_blue.png'
    }
  ];

    message;

  constructor(
    // public push: Push,
    public translate: TranslateService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController,
    private router: Router,
    public alertCtrl: AlertController,
    private authenticationService: AuthenticationService,
    private fcmmessagingService: FiremessagingService,
    public actionSheetController: ActionSheetController
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en-GB');
    console.log(translate.getBrowserCultureLang());

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    if (localStorage.getItem('language')) {
      translate.use(localStorage.getItem('language'));
      console.log(localStorage.getItem('language'));
    } else {
      this.presentActionSheet();
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.pages.map( p => {

          this.ActualPage = event.url;
          if (this.ActualPage === '/home' || this.ActualPage === '/login' || this.ActualPage === '/register') {
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

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Language',
      buttons: [{
        text: 'Deutsch',
        handler: () => {
          this.translate.use('de-DE');
          localStorage.setItem('language','de-DE')
          }
      }, {
        text: 'English',
        handler: () => {
          this.translate.use('en-GB');
          localStorage.setItem('language','en-GB')
          
          console.log('Share clicked');
        }
      }, {
        text: 'Russia',
        handler: () => {
          this.translate.use('ru-RU');
          localStorage.setItem('language','ru-RU')
          
          console.log('Play clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.currentUser = this.authenticationService.getUser();
      if (this.currentUser !== null ) {
        if (this.currentUser.userid ) {
          this.fcmmessagingService.requestPermission(this.currentUser.userid);
          this.fcmmessagingService.receiveMessage();
          this.message = this.fcmmessagingService.currentMessage;

          this.router.navigate(['/user']);
        }
      }

    });
  }

  saveDeviceToken(t) {
    localStorage.setItem('fcmtoken', t);
  }

}
