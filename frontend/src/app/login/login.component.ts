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
      validators: [ Validators.required, Validators.email ],
      nonNullable: true
    }),
    password: new FormControl('', {
      validators:[ Validators.required, Validators.minLength(6)],
      nonNullable: true
    })
  });
 
  onSubmit() {
    if (this.loginForm.invalid) {
      console.log("Invalid form data")
      return;
    }

    const email = (this.loginForm.get('email')?.value || '').toString()
    const password = (this.loginForm.get('password')?.value || '').toString()
    this.accountService.login(email , password)
  }
}
