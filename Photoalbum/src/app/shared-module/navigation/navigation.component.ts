import { UserService } from './../../users-module/user.service';
import 'rxjs/add/operator/map'
import { ChangeUserComponent } from './../../users-module/change-user/change-user.component';
import { UsersDataService  } from './../services/users-data.service';
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
    private usersDataService: UsersDataService,
    private userService: UserService
  ) {}
  ngOnInit() {
    this.usersDataService.getCurrentUser().subscribe(data => {
      this.userName = data["user"]["name"];
    });
    //this.userName = this.authService.getUser();
    //console.log(this.authService.getUser());
  }

  logout() {
    //this.userService.logoutUser(this.user);
    this.authService.logout();
    this.router.navigate([""]);
  }
  changeUser() {
    this.dialogRef = this.dialog.open(ChangeUserComponent);
    this.dialogRef.afterClosed().subscribe(result => {
      this.usersDataService
        .getCurrentUser()
        .map(mappedData => {
          return mappedData["user"];
        })
        .subscribe(user => {
          if (result) {
            user.login = result.newLogin;
            user.name = result.newName;
            this.usersDataService.changeUser(user).subscribe(data => {
              if (data) {
                this.userName = result.newName;
              } else {
                this.userName = user.name;
              }
            });
          }
        });
    });
  }
}
