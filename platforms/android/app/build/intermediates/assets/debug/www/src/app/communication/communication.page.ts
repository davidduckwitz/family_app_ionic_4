import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from '../services/messages.service';
import { FamilyService } from '../services/family.service';
import { ModalController, AlertController, Platform } from '@ionic/angular';
import { ChatModalComponent } from '../components/chat-modal/chat-modal.component';
import { AuthenticationService } from '../services/authentication.service';

// import { Events, Content } from '@ionic-native';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.page.html',
  styleUrls: ['./communication.page.scss'],
})
export class CommunicationPage implements OnInit {
  conversations: any;
  chatmembers: any;
  currentUser: any;
  to_user_id: any;
  private sub: any;
  loadingid: number;

  constructor(private messagesService: MessagesService,
                private authenticationService: AuthenticationService,
                public modalController: ModalController,
                public alertController: AlertController,
                private activatedRoute: ActivatedRoute,
                private platform: Platform
                ) { }
  ngOnInit() {
    this.currentUser = this.authenticationService.getUser();
    this.getConversationsByUserId(this.currentUser.userid);
    this.getMembersForChatByUserId(this.currentUser.userid);
  }

  getConversationsByUserId(id: number) {
    this.messagesService.getConversationsByUserId(id).subscribe(conversations => {
      this.conversations = conversations;
    });
  }

  getMembersForChatByUserId(id: number) {
    this.messagesService.getChatMembersByUserId(id).subscribe(members => {
      if (members.length > 0) {
        this.chatmembers = members[1];
      }
    });
  }

  onChangeNewConv(to_user_id) {
    this.messagesService.createConversation(this.currentUser.userid, to_user_id).subscribe(conversations => {
      if (this.currentUser.userid > 0) {
        this.getConversationsByUserId(this.currentUser.userid);
      } else {
        this.getConversationsByUserId(2);
      }
      this.chatModal(conversations['conversationid'], to_user_id);
    });
  }

  async chatModal(conversationid: number, touserid: number) {
    this.to_user_id = touserid;
    const modal = await this.modalController.create({
      component: ChatModalComponent,
      componentProps: {
        conversation_id: conversationid,
        from_user_id: this.currentUser.id,
        to_user_id: touserid
      }
    });
    return await modal.present();
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
}
