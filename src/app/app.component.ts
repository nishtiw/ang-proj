import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from './auth-login.service';
import { AuthGuard } from './auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // title = 'routing-practice';

  constructor(private _authGuard: AuthGuard, private router: Router, private _authService: AuthLoginService) {

  }
  ngOnInit(): void {
    // this._authService.autoLogin();
    if(this._authGuard.canActivate())
    {
      this.router.navigate(['/profile']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  // doLogout() {
  //   return this._authService.isValid;
  //   this.router.navigate(['/shared']);
  // }
}
