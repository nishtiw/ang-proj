import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServService {

  // user = new BehaviorSubject<>(null);

  constructor() { }
  get isUserLoggedIn() {
    return false;
  }
}
