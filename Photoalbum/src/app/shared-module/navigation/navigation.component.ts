import { UsersService } from './../services/users.service';
import { AuthService } from './../../shared-module/services/auth.service';
import { User } from './../models/user.model';
import { SignInComponent } from './../../users-module/sign-in/sign-in.component';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() isAuth;
  userName;
constructor(private authService: AuthService, private router: Router, private userService: UsersService){}
  ngOnInit() {
    this.userService.getCurrentUser().subscribe(data => {
      this.userName = data['user']['name'];
    })
  }
  logout(){
    //this.userService.logoutUser(this.user);
    this.authService.logout();
    this.router.navigate(['']);
  }
}
