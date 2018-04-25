import 'rxjs/add/operator/map'
import { ChangeUserComponent } from './../../users-module/change-user/change-user.component';
import { UsersService } from './../services/users.service';
import { AuthService } from './../../shared-module/services/auth.service';
import { User } from './../models/user.model';
import { SignInComponent } from './../../users-module/sign-in/sign-in.component';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  @Input() isAuth;
  userName;
  dialogRef: MatDialogRef<ChangeUserComponent>;
  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    private userService: UsersService
  ) {}
  ngOnInit() {
    this.userService.getCurrentUser().subscribe(data => {
      this.userName = data["user"]["name"];
    });
  }
  logout() {
    //this.userService.logoutUser(this.user);
    this.authService.logout();
    this.router.navigate([""]);
  }
  changeUser() {
    this.dialogRef = this.dialog.open(ChangeUserComponent);
    this.dialogRef.afterClosed().subscribe(result => {
      this.userService
        .getCurrentUser()
        .map(value => {
          return value["user"];
        })
        .subscribe(user => {
          user.login = result.newLogin;
          user.name = result.newName;
          /* this.userService.changeUser(user).subscribe(user => {
            console.log(user);
          }); */
        });
    });
  }
}
