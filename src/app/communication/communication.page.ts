import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from '../services/messages.service';
import { ModalController } from '@ionic/angular';
import { ChatModalComponent } from '../components/chat-modal/chat-modal.component';
// import { Events, Content } from '@ionic-native';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.page.html',
  styleUrls: ['./communication.page.scss'],
})
export class CommunicationPage implements OnInit {
  conversations: any;
  currentUser: any = { id: 2};
  private sub: any;
  loadingid: number;
  conversationid: any = { id: 1};
  constructor(private messagesService: MessagesService,
                public modalController: ModalController,
                private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.getConversationsByUserId(2);
  }

  getConversationsByUserId(id: number) {
    this.messagesService.getConversationsByUserId(id).subscribe(conversations => {
      this.conversations = conversations;
    });
  }

  loadMessages(id: any) {
    this.loadingid = id;
  }

  openModal(value:any){
    this.chatModal(value);
  }
  
  async chatModal(value:any) {
    console.log('openModal');
    const modal = await this.modalController.create({
      component: ChatModalComponent,
      componentProps: { conversation_id: value,
                        from_user_id: this.currentUser.id
                      }
    });

    return await modal.present();
  }  

}
