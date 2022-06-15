import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  constructor(private router: Router) { 
    // this.autoLogin();
  }

  userArray: any = [];
  isValid: boolean = false;

  setAllUsers(userArray: any) {
    this.userArray.push(userArray);
    localStorage.setItem("userArrayData",JSON.stringify(userArray));
    // console.log(this.userArray);
  }

  setCurrentUser(currentUser: any) {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    
  }
  userArrayData1: any = localStorage.getItem("userArrayData");
    userArrayData2 = JSON.parse(this.userArrayData1);
    // console.log(this.userArrayData2);

    currentUser1: any = localStorage.getItem("currentUser");
    currentUser2 = JSON.parse(this.currentUser1);
    // console.log(this.currentUser2);

  

  isValidUser(user: any) {
    this.setCurrentUser(user);
    // console.log(this.userArrayData2[0].username);
    this.userArrayData1 = localStorage.getItem("userArrayData");
    this.userArrayData2 = JSON.parse(this.userArrayData1);
    this.currentUser1 = localStorage.getItem("currentUser");
    this.currentUser2 = JSON.parse(this.currentUser1);
    console.log(this.currentUser2);
    for(let i=0; i<this.userArrayData2.length; i++) {
      if(this.userArrayData2[i].username == this.currentUser2.username) {
        if(this.userArrayData2[i].password == this.currentUser2.password) {
          this.isValid = true;
          console.log(this.isValid);
          this.router.navigate(['/profile']);
          break;
        }
      }
      else {
        console.log(this.isValid);
      }
    }
  }
  validUser():boolean {
    if(this.isValid == true)
      return true;
    else
      return false;
  }

  autoLogin(): boolean {
    // localStorage.setItem("currentUser", JSON.stringify(currentUser));
    this.userArrayData1 = localStorage.getItem("userArrayData");
    this.userArrayData2 = JSON.parse(this.userArrayData1);
    this.currentUser1 = localStorage.getItem("currentUser");
    this.currentUser2 = JSON.parse(this.currentUser1);
    
    for(let i=0; i<this.userArrayData2.length; i++) {
      if(this.userArrayData2[i].username == this.currentUser2.username) {
        if(this.userArrayData2[i].password == this.currentUser2.password) {
          this.isValid = true;
          console.log(this.isValid);
          this.router.navigate(['/profile']);
          // return this.isValid;
          // break;
        }
      }
      else {
        console.log(this.isValid);
        // return this.isValid;
      }
    }
    return this.isValid;
  }
}
