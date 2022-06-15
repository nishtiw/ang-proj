import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginService } from 'src/app/auth-login.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  // user2 = new FormControl('',Validators.required);

  objects: any = [];

  loginUser() {
    if(this.loginForm.controls['username'].valid) {
      (document.getElementById('n') as HTMLFormElement).style.color = "black";
      // return true;
    }
    else {
      (document.getElementById('n') as HTMLFormElement).style.color = "red";
      return false;
    }

    if(this.loginForm.controls['password'].valid) {
      (document.getElementById('c') as HTMLFormElement).style.color = "black";
      // return true;
    }
    else {
      (document.getElementById('c') as HTMLFormElement).style.color = "red";
      return false;
    }

    // if (this.loginForm.status == 'INVALID') {
    //   return false;
    // }
    // else {
      this.objects.push(this.loginForm.value);
      // console.warn(this.loginForm.value);
      // console.log(this.objects);
      this._authLoginService.setAllUsers(this.objects);
      return true;
    // }
  }
  constructor(private _authLoginService: AuthLoginService, private router: Router) { }

  ngOnInit(): void {
  }

  Login() {
    this.router.navigate(['/login']);
  }
}
