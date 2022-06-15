import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharedcomp3',
  templateUrl: './sharedcomp3.component.html',
  styleUrls: ['./sharedcomp3.component.scss']
})
export class Sharedcomp3Component implements OnInit {

  constructor() { }

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
}
