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
    const params = new HttpParams()
      .append('userid', id.toString())
     ;
     return this.httpClient.get('http://familyapp.arina-web-innovations.online/api/v1/getConversations.php', {params: params})
       .pipe(map((response: String) => response));
  }
  getMessagesByConversationId(id: number) {
    const params = new HttpParams()
      .append('conversationid', id.toString())
     ;
     return this.httpClient.get('http://familyapp.arina-web-innovations.online/api/v1/messages.php', {params: params})
       .pipe(map((response: String) => response));
  }
  createMessage(from_user_id: number, to_user_id: number, message_text: string) {
    const params = new HttpParams()
    .set('from', from_user_id.toString())
    .set('to', to_user_id.toString())
    .set('message', message_text);

    return this.httpClient
      .post('http://familyapp.arina-web-innovations.online/api/v1/createmessage.php', params)
      .pipe(map((response: Object) => response));
  }
  createConversation(from_user_id: number, to_user_id: number) {
    const params = new HttpParams()
    .set('from', from_user_id.toString())
    .set('to', to_user_id.toString());

    return this.httpClient
      .post('http://familyapp.arina-web-innovations.online/api/v1/createconversation.php', params)
      .pipe(map((response: Object) => response));
  }
  getChatMembersByUserId(id: number) {
    const params = new HttpParams()
      .append('userid', id.toString());
     return this.httpClient.get('http://familyapp.arina-web-innovations.online/api/v1/loadchatmembers.php', {params: params})
       .pipe(map((response: String) => response));
  }
}
