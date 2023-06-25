import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private accountService: AccountService) { }

  registerForm = new FormGroup({
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
    const email = (this.registerForm.get('email')?.value || '').toString()
    const password = (this.registerForm.get('password')?.value || '').toString()
    this.accountService.register(email , password)
  }
}
