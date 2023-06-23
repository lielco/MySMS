import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private accountService: AccountService) { }

  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [ Validators.required ],
      nonNullable: true
    }),
    password: new FormControl('', {
      validators: Validators.required,
      nonNullable: true
    })
  });
 
  onSubmit() {
    const email = (this.loginForm.get('email')?.value || '').toString()
    const password = (this.loginForm.get('password')?.value || '').toString()
    console.log("in onSubmit")
    console.log("email " + email + " pw: " + password)
    this.accountService.login(email , password)
  }
}
