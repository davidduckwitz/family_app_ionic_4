import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { AuthenticationService } from '../../services/authentication.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chat-modal',
  templateUrl: './chat-modal.component.html',
  styleUrls: ['./chat-modal.component.scss']
})
export class ChatModalComponent implements OnInit {
  @ViewChild('chat_input') messageInput: ElementRef;
  @Input() conversation_id: number;
  @Input() from_user_id: number;
  @Input() to_user_id: number;
  msgList: any = [];
  user: any;
  toUser: any;
  editorMsg = '';
  showEmojiPicker = false;
  events: any;

  constructor( private authenticationService: AuthenticationService,
    private messagesService: MessagesService,
    public modalController: ModalController) {
      this.user = this.authenticationService.getUser();
    }

  ngOnInit() {
    console.log('ConversationID: ' + this.conversation_id);
    console.log('from: ' + this.user.userid);
    console.log('to: ' + this.to_user_id);
    // get message list
    this.getMsg(this.conversation_id);
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
      this.scrollToBottom();
    });
  }

  /**
   * @name sendMsg
   */
  sendMsg() {
    if (!this.editorMsg.trim()) { return; }

    // Mock message
    const id = Date.now().toString();
    const newMsg = {
      messageId: id,
      from_user_id: this.user.userid,
      to_user_id: this.to_user_id,
      time: Date.now(),
      image: this.user.picture,
      message_text: this.editorMsg,
      readed: 0
    };

    this.messagesService.createMessage(this.user.userid, this.to_user_id, this.editorMsg).subscribe(messages => {
      this.pushNewMsg(newMsg);
      this.editorMsg = '';
      this.scrollToBottom();
    });
    
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

  dismissModal() {
    this.modalController.dismiss({});
  }

}
