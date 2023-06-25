import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListmessagesComponent } from './listmessages/listmessages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
    { path: '', component: ListmessagesComponent, canActivate: [AuthGuard]},
    { path: 'message/send', component: SendmessageComponent },
    { path: 'account/login', component: LoginComponent },
    { path: 'account/register', component: RegisterComponent},
    //{ path: '**', redirectTo: '' }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
