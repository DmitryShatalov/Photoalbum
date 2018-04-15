import { PostsData } from './../../posts-data';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {PostsDataService} from '../../posts-data.service';
import { AddCardPopupComponent } from '../../shared-module/popups/add-card-popup/add-card-popup.component'

@Component({
  selector: 'app-myphotos',
  templateUrl: './myphotos.component.html',
  styleUrls: ['./myphotos.component.css'],
  providers: [AddCardPopupComponent ]
})
export class MyphotosComponent implements OnInit {
  postCardsCount: PostsData[];
  dialogRef: MatDialogRef<AddCardPopupComponent>;
  constructor(public dialog: MatDialog, private postDataService: PostsDataService) { 
  }

  ngOnInit() {
    this.postDataService.getData().subscribe(posts => this.postCardsCount = posts);
  }


  deleteMyPostCard(post: PostsData){
      this.postDataService.deleteData(post.id).subscribe(res =>{
        this.postCardsCount = this.postCardsCount.filter(p => p.id !== post.id);
         console.log(this.postCardsCount);
      });
    }

   edit(newPost: PostsData){
     setTimeout(2000);
     console.log(newPost);
   }

  openAddCardPopup(){
    this.dialogRef = this.dialog.open(AddCardPopupComponent, {
      data: {
        posts: this.postCardsCount
      }
    });
  }
 
}
