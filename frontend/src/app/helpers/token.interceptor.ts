import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AccountService } from "../account.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public accountService: AccountService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.accountService.isLoggedIn()) {
      let newRequest = request.clone({
        setHeaders: {
            'access-token': this.accountService.getToken() || '',
            'client': this.accountService.getClient() || '',
            'uid': this.accountService.getUid() || '',
        },
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}