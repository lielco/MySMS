import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    console.log("in login")
    return this.http.post<HttpResponse<any>>('http://127.0.0.1:3000/api/auth/sign_in', { email, password })
            .subscribe( response => {
              console.log(JSON.stringify(response))
            });
  }
}
