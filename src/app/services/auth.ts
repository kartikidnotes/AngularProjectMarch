import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
 
  private loggedIn = false;

  login() {
    //login
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
