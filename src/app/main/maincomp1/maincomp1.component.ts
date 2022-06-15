import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginService } from 'src/app/auth-login.service';

@Component({
  selector: 'app-maincomp1',
  templateUrl: './maincomp1.component.html',
  styleUrls: ['./maincomp1.component.scss']
})
export class Maincomp1Component implements OnInit {

  constructor(private _authLoginService: AuthLoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  sendFormData() {
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
    console.log(this.loginForm.value);
    this._authLoginService.isValidUser(this.loginForm.value);
    return true;
  }

  register() {
    this.router.navigate(['/register']);
  }

}
