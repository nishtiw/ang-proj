import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthLoginService } from 'src/app/auth-login.service';

@Component({
  selector: 'app-sharedcomp1',
  templateUrl: './sharedcomp1.component.html',
  styleUrls: ['./sharedcomp1.component.scss']
})
export class Sharedcomp1Component implements OnInit {

  constructor(private _authService: AuthLoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  user1: any;
  user2 : any;
  name: any;
  displayUsername() {
    this.user1 =localStorage.getItem("currentUser");
    this.user2 =JSON.parse(this.user1);
    this.name = this.user2.username;
    return true;
  }

  loadHome() {
    this.router.navigate(['/profile'], {relativeTo: this.route});
  }

  onLogout() {
    this.router.navigate(['/login']);
    this._authService.isValid = false;
    localStorage.removeItem("currentUser");
  }

}
