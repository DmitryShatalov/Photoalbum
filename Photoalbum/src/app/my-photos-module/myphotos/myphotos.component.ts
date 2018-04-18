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
  posts: PostsData[];
  newPost;
  dialogRef: MatDialogRef<AddCardPopupComponent>;
  constructor(public dialog: MatDialog, private postDataService: PostsDataService) { 
  }

  ngOnInit() {
    this.postDataService.getData().subscribe(posts => this.posts = posts);
  }

  deleteMyPost(post: PostsData){
      this.postDataService.deleteData(post.id).subscribe(res =>{
        this.posts = this.posts.filter(p => p.id !== post.id);
      });
    }

  editMyPost(editedPost){
         let img = editedPost.editedImg;
         let title = editedPost.editedTitle;
         let description =  editedPost.editedDesc;
         let  id = editedPost.id;
         this.postDataService.editData({id, img, title, description} as PostsData).subscribe(res => {
         this.postDataService.getData().subscribe(posts => this.posts = posts);
         });
  }
  openAddCardPopup(){
    this.dialogRef = this.dialog.open(AddCardPopupComponent);

    this.dialogRef.afterClosed().subscribe(result => {
      this.newPost = result;
      let img =  this.newPost.newImg;
      let title = this.newPost.newTitle;
      let description =  this.newPost.newDesc;

      this.postDataService.addData({img, title, description} as PostsData).subscribe(post => {
        this.postDataService.getData().subscribe(posts => this.posts = posts);
        });
    });
  } 
 
}

