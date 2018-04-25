export class AuthService {
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
