export class AuthService{
    private isAuth = window.localStorage.length !==0;

    login(){
        this.isAuth = true;
    }
    logout(){
        this.isAuth = false;
        window.localStorage.clear();
    }

    isLoggedIn(): boolean{
        return this.isAuth;
    }
}