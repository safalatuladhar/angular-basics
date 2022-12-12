import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class AuthServiceService {

  isLoggedIn$$  = new BehaviorSubject<boolean>(false);

  constructor() { }

  // isAuthenticated(): boolean {
  //   return this.isLoggedIn;
  // }

  // authenticate(): void{
  //   this.isLoggedIn = true;
  // }
}
