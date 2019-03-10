import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { MessagesService } from '../../services/messages.service';
import { ChatModalComponent } from '../../components/chat-modal/chat-modal.component';

@Component({
  selector: 'app-family-modal',
  templateUrl: './family-modal.component.html',
  styleUrls: ['./family-modal.component.scss']
})
export class FamilyModalComponent implements OnInit {

  // "value" passed in componentProps
  @Input() value: any;
  @Input() currentuserId: number;

  constructor(navParams: NavParams, private messagesService: MessagesService, public modalController: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
  }

  ngOnInit() {
  }

  async familyModal(value) {
    console.log('openModal');
    const modal = await this.modalController.create({
      component: FamilyModalComponent,
      componentProps: { value: value, currentuserId: this.currentuserId }
    });
    return await modal.present();
  }

  dismissModal() {
    this.modalController.dismiss({
      'result': this.value
    });
  }

  chatWithUser(to_user_id) {
    this.messagesService.createConversation(this.currentuserId, to_user_id).subscribe(conversations => {
      this.chatModal(conversations['conversationid'], to_user_id);
    });
  }

  async chatModal(conversationid: number, touserid: number) {
    const modal = await this.modalController.create({
      component: ChatModalComponent,
      componentProps: {
        conversation_id: conversationid,
        from_user_id: this.currentuserId,
        to_user_id: touserid
      }
    });
    return await modal.present();
  }

}
