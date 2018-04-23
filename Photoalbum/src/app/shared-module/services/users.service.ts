import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsersService {

  url = "http://localhost:3000/";
  
  constructor(private http: HttpClient) {     
}

  getUserByLogin(login){
    return this.http.get(this.url + "getUserByLogin/" + login);
  }

  getCurrentUser() {
    return this.http.get(this.url + "getCurrentUser");
  }
  loginUser(user: User){
    return this.http.post(this.url + "login", user, httpOptions);
  }
  registerUser(user: User){
    return this.http.post(this.url + "register", user, httpOptions);
  }
  logoutUser(user: User){
    return this.http.post(this.url + "logout", user, httpOptions);
  }
}
