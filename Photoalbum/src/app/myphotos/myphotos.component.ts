import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {PostsDataService} from '../posts-data.service';
import {PostsData} from '../posts-data';
import { AddCardPopupComponent } from '../popups/add-card-popup/add-card-popup.component'

@Component({
  selector: 'app-myphotos',
  templateUrl: './myphotos.component.html',
  styleUrls: ['./myphotos.component.css'],
  providers: [PostsDataService, AddCardPopupComponent ]
})
export class MyphotosComponent implements OnInit {
  newCard :any = {
    
  };
  dialogRef: MatDialogRef<AddCardPopupComponent>;
  constructor(public dialog: MatDialog, private postDataService: PostsDataService) { 
    this.openAddCardPopup();
    console.log(this.newCard);
  }

  ngOnInit() {
  }

  postCardsCount = this.postDataService.getData();
  openAddCardPopup(){
    this.dialogRef = this.dialog.open(AddCardPopupComponent);
    this.dialogRef.afterClosed().subscribe((result) => {
      
        this.newCard = result;
        this.newCard.img = "imgPath";
        this.newCard.rate = 3;
        console.log(this.newCard);
        //this.postDataService.addData(this.newCard.img, this.newCard.title, this.newCard.desc, this.newCard.rate);
    })
    
  }
 
}
