import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

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
}
