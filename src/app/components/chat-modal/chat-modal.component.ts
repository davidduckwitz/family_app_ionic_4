import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chat-modal',
  templateUrl: './chat-modal.component.html',
  styleUrls: ['./chat-modal.component.scss']
})
export class ChatModalComponent implements OnInit {
  @ViewChild('chat_input') messageInput: ElementRef;
  @Input() conversation_id: number;
  @Input() from_user_id: number = 2;
  @Input() to_user_id: number = 4;
  msgList: any = [];
  user: {id: 2, name: 'dave', avatar: '/assets/immages/dave.jpg'};
  toUser:{id: 1, name: 'dave', avatar: '/assets/immages/arina.jpg'};
  editorMsg = '';
  showEmojiPicker = false;
  events: any;

  constructor(private messagesService: MessagesService, public modalController: ModalController) { }

  ngOnInit() {
    let id = this.conversation_id;
    console.log("ConversationID: "+id);
    //get message list
    this.getMsg(id);
  }

  onFocus() {
    this.showEmojiPicker = false;    
    this.scrollToBottom();
  }

  switchEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
    if (!this.showEmojiPicker) {
      this.focus();
    } else {
      this.setTextareaScroll();
    }
    this.scrollToBottom();
  }

  getMsg(id: number) {
    this.messagesService.getMessagesByConversationId(id).subscribe(messages => {
      this.msgList = messages;
    });
  }

  /**
   * @name sendMsg
   */
  sendMsg() {
    if (!this.editorMsg.trim()) { return; }

    // Mock message
    const id = Date.now().toString();
    let newMsg: any = {
      messageId: Date.now().toString(),
      from_user_id: '2',
      to_user_id: '4',
      time: Date.now(),
      message_text: this.editorMsg,
      readed: '0'
    };

    this.messagesService.createMessage(this.from_user_id, this.to_user_id, this.editorMsg).subscribe(messages => {
      this.msgList = messages;
    });

    this.pushNewMsg(newMsg);
    this.editorMsg = '';

    if (!this.showEmojiPicker) {
      this.focus();
    }
  }

  /**
   * @name pushNewMsg
   * @param msg
   */
  pushNewMsg(msg: any) {
    this.msgList.push(msg);
    this.scrollToBottom();
  }  

  scrollToBottom() {
  }

  private focus() {
    if (this.messageInput && this.messageInput.nativeElement) {
      this.messageInput.nativeElement.focus();
    }
  }

  private setTextareaScroll() {
    const textarea = this.messageInput.nativeElement;
    textarea.scrollTop = textarea.scrollHeight;
  }

  dismissModal(){
    this.modalController.dismiss({})
  }

}
