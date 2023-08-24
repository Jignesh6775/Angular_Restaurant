import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() {}

  login() {
    // Perform login logic here
    this.isAuthenticated = true;
  }

  logout() {
    // Perform logout logic here
    this.isAuthenticated = false;
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }
}
