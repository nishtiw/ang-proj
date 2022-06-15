import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServService } from './auth-serv.service';
import { AuthLoginService } from './auth-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthLoginService, private router: Router) {

  }
  canActivate()  {
    // this._authService.autoLogin();
    if(this._authService.isValid)
    {      
      return true;
    }
    else if(this._authService.autoLogin()) {
      return true;
    }
    else {
      alert("Permission denied! Kindly login.");
      this.router.navigate(['/login']);
      return false;
    }
    // return this._authService.validUser();
  }
  
}
