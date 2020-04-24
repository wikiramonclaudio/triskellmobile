import { Component, OnInit } from '@angular/core';
import { TkfirebaseService } from '@src/app/services/tkfirebase.service';
import {  ChatItem } from '@src/app/models/chatmessage';

@Component({
  selector: 'app-tkchat',
  templateUrl: './tkchat.component.html',
  styleUrls: ['./tkchat.component.scss']
})
export class TkchatComponent implements OnInit {
  chatMessages: ChatItem[];

  chatMessage:any = { name: '', message: '' };
  constructor(
    public tkfireService: TkfirebaseService
  ) { }

  ngOnInit() {
    this.getChatMessages();
  }

  getChatMessages(){
    this.tkfireService.getChatMessages().subscribe(
      (chatmessages: any[]) => {
        this.chatMessages =  chatmessages;
      }
    );
  }

  saveMessage(){
    if(this.chatMessage.message.length > 0 && this.chatMessage.message.length > 0){
      this.chatMessage.date = new Date().getTime();
      this.tkfireService.addMessage(this.chatMessage).then(data=>{
        this.chatMessage.message = '';
      });
    }
  }

}
