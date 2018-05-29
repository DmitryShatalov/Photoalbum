import { Observable } from 'rxjs/Observable';
import { UsersDataService } from './../shared-module/services/users-data.service';
import { Injectable } from "@angular/core";

@Injectable()

export class UserService {
  currentUser = this.getCurrentUser();
  constructor(private usersDataService: UsersDataService) {}
  getCurrentUser(){
    let currentUser;
    this.usersDataService.getCurrentUser().subscribe(res => {
      currentUser = res;
    })
    //console.log(this.currentUser);
    return currentUser;
    
  }
}