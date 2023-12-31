import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-listmessages',
  templateUrl: './listmessages.component.html',
  styleUrls: ['./listmessages.component.scss']
})

// Component showcasing all the user's messages
export class ListmessagesComponent {
  messages:any;

  constructor(private messageService: MessageService) {
    this.messages = messageService.listMessages().subscribe(
      message => {
        this.messages = message
      }
    )
  }

  MessageList() {

  }
}
