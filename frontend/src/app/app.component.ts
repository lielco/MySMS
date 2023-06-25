import { Component } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private accountService: AccountService,) {}
  
  logout(): void {
    console.log("in logout")
    this.accountService.logout();
  }
}
