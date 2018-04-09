import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {PostsDataService} from '../posts-data.service';
import {PostsData} from '../posts-data';
import { AddCardPopupComponent } from '../popups/add-card-popup/add-card-popup.component'

@Component({
  selector: 'app-myphotos',
  templateUrl: './myphotos.component.html',
  styleUrls: ['./myphotos.component.css'],
  providers: [AddCardPopupComponent ]
})
export class MyphotosComponent implements OnInit {
  
  dialogRef: MatDialogRef<AddCardPopupComponent>;
  constructor(public dialog: MatDialog, private postDataService: PostsDataService) { 
  }

  ngOnInit() {
  }

  postCardsCount = this.postDataService.getData();
  openAddCardPopup(){
    this.dialogRef = this.dialog.open(AddCardPopupComponent);
    this.dialogRef.afterClosed().subscribe((result) => {
      
    })
    
  }
 
}
