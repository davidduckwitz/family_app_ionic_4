import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user: any;
  userReady: boolean = false;

  constructor(
    private googlePlus: GooglePlus,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
     await loading.present();
     this.nativeStorage.getItem('user')
    .then(data => {
      this.user = {
        name: data.name,
        email: data.email,
        picture: data.picture,
        userid: data.userid
      };
      this.userReady = true;
      loading.dismiss();
    }, error =>{
      console.log(error);
      loading.dismiss();
    });
  }

  logoutV1(){
    this.nativeStorage.setItem('user', {});
    this.router.navigate(['/home']);
  }

  doGoogleLogout(){
    this.googlePlus.logout()
    .then(res => {
      //user logged out so we will remove him from the NativeStorage
      this.nativeStorage.remove('user');
      this.router.navigate(["/home"]);
    }, err => {
      console.log(err);
    });
  }

  Logout(){
    //user logged out so we will remove him from the NativeStorage
    this.nativeStorage.remove('user');
    this.router.navigate(["/home"]);

  }

}