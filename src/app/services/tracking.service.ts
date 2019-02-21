import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private httpClient: HttpClient) { }

  getFamilyMemberLastPositions(familyId: number, userid: number) {
    const params = new HttpParams()
      .append('id', familyId.toString())
      .append('userid', userid.toString())
     ;
     return this.httpClient.get('http://familyapp.arina-web-innovations.online/api/v1/getFamilyMemberLastPositions.php', {params: params})
       .pipe(map((response) => response));
  }

  setNewPosition(from_user_id: number, from_user_image: string, location: any, family_id: number) {
    const params = new HttpParams()
    .set('from_user_id', from_user_id.toString())
    .set('lcoation', location)
    .set('from_user_image', from_user_image)
    .set('family_id', family_id.toString());

    return this.httpClient
      .post('http://familyapp.arina-web-innovations.online/api/v1/setNewPosition.php', params)
      .pipe(map((response: Object) => response));
  }
}
