import { Injectable } from '@angular/core';
import { UsersDataService } from './users-data.service';
@Injectable()
export class AuthService {
  constructor(private userDataService: UsersDataService) {}
  //private isAuth;
  private isAuth = window.localStorage.length !== 0;
  setAuth() {
    if (window.localStorage.getItem("token") === null) {
      this.isAuth = false;
    } else this.isAuth = true;
  }

  login() {
    this.isAuth = true;
  }
  logout() {
    this.isAuth = false;
    window.localStorage.clear();
  }

  isLoggedIn(): boolean {
    return this.isAuth;
  }
}
