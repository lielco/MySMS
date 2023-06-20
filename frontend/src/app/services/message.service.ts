import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  url:string = "http://127.0.0.1:3000";
  constructor(private http: HttpClient) { }

  listMessages() {
    return this.http.get(this.url+'/api/v1/messages');
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  sendMessage(data: any) {
    return this.http.post(this.url+'/api/v1/messages', data, this.httpOptions);
  }
}
