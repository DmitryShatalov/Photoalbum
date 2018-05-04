import { Observable } from 'rxjs/Observable';
import { UsersDataService } from './../shared-module/services/users-data.service';
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  constructor(private usersDataService: UsersDataService) {}
}