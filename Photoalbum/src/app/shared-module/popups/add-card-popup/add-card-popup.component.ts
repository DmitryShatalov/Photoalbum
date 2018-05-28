import { FormGroup, Validators, FormControl } from "@angular/forms";
import { PostsData } from "../../../shared-module/posts-data";
import { Component, OnInit, Input, Inject } from "@angular/core";

import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";
import { PostsDataService } from "../../../shared-module/services/posts-data.service";
@Component({
  selector: "app-add-card-popup",
  templateUrl: "./add-card-popup.component.html",
  styleUrls: ["./add-card-popup.component.css"]
})
export class AddCardPopupComponent implements OnInit {
  fileName: string;
  img = null;
  imgUrl;
  addPopupForm: FormGroup;
  newDesc: string;
  newTitle: string;
  constructor(public dialogRef: MatDialogRef<AddCardPopupComponent>) {}

  ngOnInit() {
    this.addPopupForm = new FormGroup({
      img: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required]),
      desc: new FormControl(null, [Validators.required])
    });
  }

  onFileSelected(event) {
    this.img = event.target.files[0];
    this.fileName = event.target.files[0].name;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.imgUrl = event.target.result;
        console.log(this.imgUrl)
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
  addPost() {
    this.dialogRef.close({
      newImg: this.img,
      newTitle: this.newTitle,
      newDesc: this.newDesc
    });
  }
}
