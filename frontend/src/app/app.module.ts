import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListmessagesComponent } from './listmessages/listmessages.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './helpers/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ListmessagesComponent,
    SendmessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
