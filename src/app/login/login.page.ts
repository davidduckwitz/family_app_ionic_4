import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
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
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router,
    private platform: Platform,
    public alertController: AlertController,
    private authenticationService: AuthenticationService
  ) { }

  async doGoogleLogin(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);
    this.googlePlus.login({
      'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': environment.googleWebClientId, // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
      })
      .then(user => {
        //save user data on the native storage
        this.nativeStorage.setItem('user', {
          name: user.displayName,
          email: user.email,
          picture: user.imageUrl
        })
        .then(() => {
           this.router.navigate(['/user']);
        }, (error) => {
          console.log(error);
        });
        loading.dismiss();
      }, err => {
        console.log(err);
        if(!this.platform.is('cordova')) {
          this.presentAlert('success', 'Cordova kann im Browser nicht geladen werden');
        }
        loading.dismiss();
      });
  }

  loginV1(email: string, password: string) {
    console.log(email, password);
    this.authenticationService.loginV1(email, password)
      .subscribe(response => {

        if(response['status'] === 1) {
					console.log(response['message']);
          this.presentAlert('Success', response['message']);
          this.nativeStorage.setItem('user', {
            name: response['username'],
            email: response['email'],
            picture: response['image'],
            userid: response['userid']
          });

					this.router.navigate(['/user']);
				} else {
					console.log(response['message']);
					this.presentAlert('Danger', response['message']);
				}
      }, error => {
        console.log(error.status);
        this.presentAlert('Danger', error.status);
      });
  }

  devloginV1(email: string, password: string) {
    console.log(email, password);
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

  async login() {   
    console.log("Login");		
    this.router.navigate(["/user"]);
  }

}
