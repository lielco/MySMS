import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private clientKey = 'client'
  private uidKey = 'uid'
  private tokenKey = 'access-token'

  constructor(private http: HttpClient, private router: Router) { }

  public login(email: string, password: string) {
    return this.http.post('http://127.0.0.1:3000/api/auth/sign_in', { email, password }, {observe: 'response'})
            .subscribe( response => {
              localStorage.setItem(this.tokenKey, response.headers.get(this.tokenKey) || '');
              localStorage.setItem(this.clientKey, response.headers.get(this.clientKey) || '');
              localStorage.setItem(this.uidKey, response.headers.get(this.uidKey) || '');
              this.router.navigate(['']);
            });
  }

  public register(email: string, password: string) {
    return this.http.post('http://127.0.0.1:3000/api/auth', { email, password }, {observe: 'response'})
            .subscribe( response => {
              localStorage.setItem(this.tokenKey, response.headers.get(this.tokenKey) || '');
              localStorage.setItem(this.clientKey, response.headers.get(this.clientKey) || '');
              localStorage.setItem(this.uidKey, response.headers.get(this.uidKey) || '');
              this.router.navigate(['']);
            });
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.clientKey);
    localStorage.removeItem(this.uidKey);
    this.router.navigate(['account/login']);
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
