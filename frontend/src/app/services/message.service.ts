import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  url:string = "http://127.0.0.1:3000";
  constructor(private http: HttpClient) { }

  listMessages() {
    return this.http.get(this.url+'/api/v1/messages');
  }
}
