import {PostsData} from '../../../shared-module/posts-data';
import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {PostsDataService} from '../../../shared-module/services/posts-data.service';


@Component({
  selector: 'app-edit-card-popup',
  templateUrl: './edit-card-popup.component.html',
  styleUrls: ['./edit-card-popup.component.css']
})
export class EditCardPopupComponent implements OnInit {

  img: string = "http://www.sketchupjapan.com/podium/images/placeholder-04.png";
  //@Input() id: number;
  editedTitle:string;
  editedDesc:string;
  editedPost: PostsData;
  constructor(public dialogRef: MatDialogRef<EditCardPopupComponent>) { }

  ngOnInit() {
  }
 
  editPost(){
    this.dialogRef.close({editedImg:this.img, editedTitle: this.editedTitle, editedDesc: this.editedDesc}); 
  }
  
 
}
