import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../account.service';
import { Injectable, inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
class AuthorizationService {

  constructor(private router: Router, private accountService: AccountService) {}

  // Checks if there's a user logged in, if not, route to login page'
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.accountService.isLoggedIn()) {
      this.router.navigate(['account/login']);
    }

    return true;
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AuthorizationService).canActivate(next, state);
}