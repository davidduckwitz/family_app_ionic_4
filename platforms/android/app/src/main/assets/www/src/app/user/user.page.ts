import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LoadingController, Platform } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user: any;
  userReady = false;

  constructor(
    public translate: TranslateService,
    private googlePlus: GooglePlus,
    public loadingController: LoadingController,
    private router: Router,
    private platform: Platform,
    private authenticationService: AuthenticationService
  ) {
    
    console.log(translate.getBrowserCultureLang());

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    if (localStorage.getItem('language') !== '') {
      translate.use(localStorage.getItem('language'));
    } else {
      if ( translate.getBrowserCultureLang() ) {
        translate.use(translate.getBrowserCultureLang());
        console.log('Language from Browser:' + translate.getBrowserCultureLang());
      } else {
        translate.use('en-GB');
      }

    }
   }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
     await loading.present();
      this.user = this.authenticationService.getUser();
      this.userReady = true;
      loading.dismiss();
  }

  logoutV1() {
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }

  doGoogleLogout() {
    this.googlePlus.logout()
    .then(res => {
      // user logged out so we will remove him from the NativeStorage
      localStorage.removeItem('user');
      this.router.navigate(['/home']);
    }, err => {
      console.log(err);
    });
  }

  Logout() {
    // user logged out so we will remove him from the NativeStorage
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }

}
