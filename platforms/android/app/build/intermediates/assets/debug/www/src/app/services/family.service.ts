import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor(private httpClient: HttpClient) { }

  getFamilysByUserId(id: number) {
    let params = new HttpParams()
      .append('userid', id.toString())
     ;
     return this.httpClient.get('http://familyapp.arina-web-innovations.online/api/v1/loadfamilys.php', {params: params})
       .pipe(map((response: Object) => response));
  }

  getFamilymembersByUserId(id: number) {
    let params = new HttpParams()
      .append('familyid', id.toString())
     ;
     return this.httpClient.get('http://familyapp.arina-web-innovations.online/api/v1/loadfamily_members.php', {params: params})
       .pipe(map((response: Object) => response));
  }

  addToFamily(firstname: string, lastname: string, email: string, family_id: number) {
    const params = new HttpParams()
      .set('firstname', firstname)
      .set('lastname', lastname)
      .set('email', email)
      .set('family_id', family_id.toString());

    return this.httpClient
      .post('http://familyapp.arina-web-innovations.online/api/v1/addfamily_member.php', params)
      .pipe(map((response: Object) => response));
  }

  addFamily(firstname: string, userid: number) {
    const params = new HttpParams()
      .set('familyname', firstname)
      .set('userid', userid.toString());

    return this.httpClient
      .post('http://familyapp.arina-web-innovations.online/api/v1/addfamily.php', params)
      .pipe(map((response: Object) => response));
  }

  addTamilyByHash(hash: string, user: number) {
    const params = new HttpParams()
      .set('code', hash)
      .set('userid', user.toString());

    return this.httpClient
      .post('http://familyapp.arina-web-innovations.online/api/v1/addfamilywithcode.php', params)
      .pipe(map((response: Object) => response));
  }
}
