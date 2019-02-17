import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private nativeStorage: NativeStorage, private platform: Platform, private httpClient: HttpClient) { }

  loginV1(useremail: string, password: string) {
    const params = new HttpParams()
      .set('useremail', useremail)
      .set('password', password);

    return this.httpClient
      .post('http://familyapp.arina-web-innovations.online/api/v1/login.php', params)
      .pipe(map((response: Object) => response));
  }

  registerV1(username:string, useremail: string, password: string) {
    const params = new HttpParams()
    .set('useremail', useremail)
    .set('username', username)
    .set('password', password)
    .set('password_again', password);

    return this.httpClient
      .post('http://familyapp.arina-web-innovations.online/api/v1/register.php', params)
      .pipe(map((response: Object) => response));
  }

  setUser(user: any){
    if (!this.platform.is('cordova')) {
      console.log('save user local');
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    } else {
      this.nativeStorage.setItem('user', user)
      .then(() => {
         return true;
      }, (error) => {
        console.log(error);
        return false;
      });
    }
  }

  getUser(){
    if (!this.platform.is('cordova')) {
      const user = JSON.parse(localStorage.getItem('user'));
      return user;
    } else {
      this.nativeStorage.getItem('user').then(data => {
        const user = data;
        return user;
      }, error => {
        console.log(error);
        return false;
      });
    }
  }

}
