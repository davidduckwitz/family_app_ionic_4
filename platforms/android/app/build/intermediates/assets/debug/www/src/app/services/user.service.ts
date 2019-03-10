import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  setUserAvatar(avatar: string, user: number) {
    const params = new HttpParams()
      .set('image', avatar)
      .set('user', user.toString());

    return this.httpClient
      .post('http://familyapp.arina-web-innovations.online/api/v1/setUserAvatar.php', params)
      .pipe(map((response: Object) => response));
  }

  setUserFirstname(firstname: string, user: number) {
    const params = new HttpParams()
      .set('firstname', firstname)
      .set('user', user.toString());

    return this.httpClient
      .post('http://familyapp.arina-web-innovations.online/api/v1/setUserFirstname.php', params)
      .pipe(map((response: Object) => response));
  }

  setUserLastname(lastname: string, user: number) {
    const params = new HttpParams()
      .set('lastname', lastname)
      .set('user', user.toString());

    return this.httpClient
      .post('http://familyapp.arina-web-innovations.online/api/v1/setUserLastname.php', params)
      .pipe(map((response: Object) => response));
  }
}
