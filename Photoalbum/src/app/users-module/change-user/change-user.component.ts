import {
  Component,
  OnInit,
  Inject,
  ComponentFactoryResolver
} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { UsersDataService } from "../../shared-module/services/users-data.service";
import { AuthService } from "../../shared-module/services/auth.service";

@Component({
  selector: "app-change-user",
  templateUrl: "./change-user.component.html",
  styleUrls: ["./change-user.component.css"]
})
export class ChangeUserComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ChangeUserComponent>,
    private usersDataService: UsersDataService,
    private authService: AuthService
  ) {}
  //currentName: string = this.data.currentUser.name;
  //currentLogin: string = this.data.currentUser.login;
  newName;
  newLogin;
  isNameEditable: boolean = false;
  isLoginEditable: boolean = false;

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.usersDataService.getCurrentUser().subscribe(res => {
        this.newName = res["name"];
        this.newLogin = res["login"];
      });
    }
  }

  changeUser() {
   // console.log(this.newName, this.newLogin);
    this.dialogRef.close({ newName: this.newName, newLogin: this.newLogin });
  }

  closeChangePopup() {
    this.dialogRef.close();
  }

  editName() {
    this.isNameEditable = !this.isNameEditable;
   // console.log(this.isNameEditable);
  }
  editLogin() {
    this.isLoginEditable = !this.isLoginEditable;
   // console.log(this.isLoginEditable);
  }
}
