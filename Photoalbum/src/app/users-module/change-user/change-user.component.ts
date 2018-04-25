import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: "app-change-user",
  templateUrl: "./change-user.component.html",
  styleUrls: ["./change-user.component.css"]
})
export class ChangeUserComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ChangeUserComponent>) {}
  newName;
  newLogin;
  ngOnInit() {}

  changeUser() {
    this.dialogRef.close({ newName: this.newName, newLogin: this.newLogin });
  }
}
