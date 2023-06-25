import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private clientKey = 'client'
  private uidKey = 'uid'
  private tokenKey = 'access-token'

  constructor(private http: HttpClient) { }

  public login(email: string, password: string) {
    console.log("in login")
    return this.http.post('http://127.0.0.1:3000/api/auth/sign_in', { email, password }, {observe: 'response'})
            .subscribe( response => {
              console.log(response.headers.get('client'))
              localStorage.setItem(this.tokenKey, response.headers.get(this.tokenKey) || '');
              localStorage.setItem(this.clientKey, response.headers.get(this.clientKey) || '');
              localStorage.setItem(this.uidKey, response.headers.get(this.uidKey) || '');
            });
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.clientKey);
    localStorage.removeItem(this.uidKey);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    let client = localStorage.getItem(this.clientKey);
    let uid = localStorage.getItem(this.uidKey);
    return token != null && token.length > 0 && client != null && client.length > 0 && uid != null && uid.length > 0;
  }

  public getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  public getClient(): string | null {
    return localStorage.getItem(this.clientKey);
  }

  public getUid(): string | null {
    return localStorage.getItem(this.uidKey);
  }
}
