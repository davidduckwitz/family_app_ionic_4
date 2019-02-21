import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LoadingController, Platform } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user: any;
  userReady = false;

  constructor(
    private googlePlus: GooglePlus,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router,
    private platform: Platform,
    private authenticationService: AuthenticationService
  ) { }

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
