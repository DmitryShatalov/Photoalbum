import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PostsDataService } from '../../posts-data.service';
import {PostsData} from '../../posts-data';


@Component({
  selector: 'app-edit-card-popup',
  templateUrl: './edit-card-popup.component.html',
  styleUrls: ['./edit-card-popup.component.css']
})
export class EditCardPopupComponent implements OnInit {
  img: string;
  NewTitle:string;
  NewDesc:string;
  constructor(public dialogRef: MatDialogRef<EditCardPopupComponent>, private postDataService:PostsDataService, @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
  }

  editPost(){
    this.dialogRef.close({title: this.NewTitle, desc: this.NewDesc});
    this.postDataService.editData(this.data.index, this.NewTitle, this.NewDesc);
  }
}
