import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: any;
  slideOpts = {
    effect: 'flip'
  };

  constructor(
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router,
    private platform: Platform,
    public alertController: AlertController
    ) { }

  ngOnInit() {
    /*this.nativeStorage.setItem('user', {
      name: "dave",
      email: "davidduckwitz@googlemail.com",
      picture: "data.picture"
    });*/
  }

  checkLogIn() {
    this.platform.ready().then(() => {
      // Here we will check if the user is already logged in
      // because we don't want to ask users to log in each time they open the app
      this.nativeStorage.getItem('user')
      .then( data => {
        // user is previously logged and we have his data
        // we will let him access the app
        this.router.navigate(['/user']);
      }, error => {
        this.router.navigate(['/home']);
      });
    });
  }
}
