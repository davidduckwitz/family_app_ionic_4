import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private httpClient: HttpClient) { }

  getConversationsByUserId(id: number) {
    let params = new HttpParams()
      .append('userid', id.toString())
     ;
     return this.httpClient.get('http://familyapp.arina-web-innovations.online/api/v1/getConversations.php', {params: params})
       .pipe(map((response: Object) => response));
  }

  getMessagesByConversationId(id: number) {
    let params = new HttpParams()
      .append('conversationid', id.toString())
     ;
     return this.httpClient.get('http://familyapp.arina-web-innovations.online/api/v1/messages.php', {params: params})
       .pipe(map((response: Object) => response));
  }
  
  createMessage(from_user_id: number, to_user_id: number, message_text: string) {
    const params = new HttpParams()
    .set('from_user_id', from_user_id.toString())
    .set('to_user_id', to_user_id.toString())
    .set('message_text', message_text);

    return this.httpClient
      .post('http://familyapp.arina-web-innovations.online/api/v1/createMessage.php', params)
      .pipe(map((response: Object) => response));
  }
}
