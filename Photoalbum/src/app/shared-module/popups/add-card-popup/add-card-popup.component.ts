import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PostsDataService } from '../../../posts-data.service';
import {PostsData} from '../../../posts-data';
@Component({
  selector: 'app-add-card-popup',
  templateUrl: './add-card-popup.component.html',
  styleUrls: ['./add-card-popup.component.css'],
})
export class AddCardPopupComponent implements OnInit {
    img: string;
    title:string;
    desc:string;
constructor(public dialogRef: MatDialogRef<AddCardPopupComponent>, private postDataService:PostsDataService){}

  ngOnInit() {
  }

  addPost(){
    this.dialogRef.close({title: this.title, desc: this.desc});
    this.postDataService.addData("http://www.sketchupjapan.com/podium/images/placeholder-04.png", this.title, this.desc, 3);
  }

    
}
