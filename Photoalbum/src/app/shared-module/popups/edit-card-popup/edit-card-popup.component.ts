import { PostsData } from './../../../posts-data';
import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PostsDataService } from '../../../posts-data.service';


@Component({
  selector: 'app-edit-card-popup',
  templateUrl: './edit-card-popup.component.html',
  styleUrls: ['./edit-card-popup.component.css']
})
export class EditCardPopupComponent implements OnInit {

  img: string = "http://www.sketchupjapan.com/podium/images/placeholder-04.png";
  //@Input() id: number;
  newTitle:string;
  newDesc:string;
  newPost: PostsData;
  constructor(public dialogRef: MatDialogRef<EditCardPopupComponent>, private postDataService:PostsDataService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
 
  editPost(id, img: string, title: string, description: string){
    this.dialogRef.close({newImg:this.img, newTitle: this.newTitle, newDesc: this.newDesc}); 
  }
  
 
}
