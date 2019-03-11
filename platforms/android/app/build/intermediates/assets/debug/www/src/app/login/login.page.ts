import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LoadingController, AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private googlePlus: GooglePlus,
    public loadingController: LoadingController,
    private router: Router,
    private platform: Platform,
    public alertController: AlertController,
    private authenticationService: AuthenticationService
  ) { }

  async doGoogleLogin() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);
    this.googlePlus.login({
      'scopes': '', // optional - space-separated list of scopes, If not defaults to `profile` and `email`.
      'webClientId': environment.googleWebClientId, // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
      })
      .then(user => {
        // save user data on the native storage
        loading.dismiss();
        this.useGooglePlusloginV1(user.email, user.displayName, user.imageUrl);
         
        
      }, err => {
        console.log(err);
        if (!this.platform.is('cordova')) {
          this.presentAlert('success', 'Cordova kann im Browser nicht geladen werden');
        }
        loading.dismiss();
      });
  }

  useGooglePlusloginV1(email: string, name: string, image: string) {
   
    this.authenticationService.googleloginV1(email, name, image)
      .subscribe(response => {
        this.presentAlert('Success', response['message']);
        if (response['status'] === 1) {
          this.presentAlert('Success', response['message']);
          const user = {
            name: response['username'],
            firstname: response['firstname'],
            lastname: response['lastname'],
            email: response['email'],
            image: response['image'],
            userid: response['userid']
          };
            // this.presentAlert('success', 'Cordova kann im Browser nicht geladen werden');
            this.authenticationService.setUser(user);
            this.router.navigate(['/user']);
        } else {
        this.presentAlert('Danger', response['message']);
        }
      }, error => {
        console.log(error.status);
        this.presentAlert('Danger', error.status);
      });
  }

  loginV1(email: string, password: string) {
    console.log(email, password);
    this.authenticationService.loginV1(email, password)
      .subscribe(response => {

        if (response['status'] === 1) {
          this.presentAlert('Success', response['message']);
          const user = {
            name: response['username'],
            firstname: response['firstname'],
            lastname: response['lastname'],
            email: response['email'],
            image: response['image'],
            userid: response['userid']
          };
            // this.presentAlert('success', 'Cordova kann im Browser nicht geladen werden');
            this.authenticationService.setUser(user);
            this.router.navigate(['/user']);
        } else {
        this.presentAlert('Danger', response['message']);
        }
      }, error => {
        console.log(error.status);
        this.presentAlert('Danger', error.status);
      });
  }

  devloginV1(email: string, password: string) {
    this.loginV1(email, password);
    this.router.navigate(['/user']);
  }

  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
    header: title,
        message: content,
        buttons: ['OK']
      });
      await alert.present();
    }

  async presentLoading(loading) {
    return await loading.present();
  }

}
