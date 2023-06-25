import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.scss']
})
export class SendmessageComponent {
  message: any
  loading = false;

  messageForm = new FormGroup({
    recipient_phone_number: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(private messageService: MessageService) {}
  
  onSubmit() {
    this.loading = true;
    this.messageService.sendMessage(this.messageForm.value).subscribe(
      message => {
        this.message = message
        this.loading = false;
      }
    );
  }
}
