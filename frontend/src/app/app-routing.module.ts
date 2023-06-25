import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListmessagesComponent } from './listmessages/listmessages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: '', component: ListmessagesComponent },
    { path: 'account/login', component: LoginComponent },
    { path: 'account/register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
