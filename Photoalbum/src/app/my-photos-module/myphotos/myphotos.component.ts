import { Observable } from 'rxjs/Observable';
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
  newPost;
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

    edit(newPost){
        let img = newPost.newImg;
         let title = newPost.newTitle;
         let description =  newPost.newDesc;
        let  id = newPost.id;
         this.postDataService.editData({id, img, title, description} as PostsData).subscribe(res => {
         this.postDataService.getData().subscribe(posts => this.postCardsCount = posts);
         });
    }
  openAddCardPopup(){
    this.dialogRef = this.dialog.open(AddCardPopupComponent, {
      data: {
        posts: this.postCardsCount
      }
    });
  }
 
}
