import { Observable } from 'rxjs/Observable';
import {PostsData} from '../../shared-module/posts-data';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {PostsDataService} from '../../shared-module/services/posts-data.service';
import { AddCardPopupComponent } from '../../shared-module/popups/add-card-popup/add-card-popup.component'
import { AuthService } from './../../shared-module/services/auth.service';

@Component({
  selector: "app-myphotos",
  templateUrl: "./myphotos.component.html",
  styleUrls: ["./myphotos.component.css"],
  providers: [AddCardPopupComponent]
})
export class MyphotosComponent implements OnInit {
  posts;
  newPost;
  dialogRef: MatDialogRef<AddCardPopupComponent>;
  constructor(
    public dialog: MatDialog,
    private postDataService: PostsDataService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.postDataService.getData().subscribe(posts => (this.posts = posts));
    this.isAuth();
  }

  deleteMyPost(post: PostsData) {
    this.postDataService.deleteData(post.id).subscribe(res => {
      this.posts = this.posts.filter(p => p.id !== post.id);
    });
  }

  editMyPost(editedPost) {
    let imageUrl = editedPost.editedImg;
    let title = editedPost.editedTitle;
    let description = editedPost.editedDesc;
    let id = editedPost.id;
    this.postDataService
      .editData({ id, imageUrl, title, description } as PostsData)
      .subscribe(res => {
        this.postDataService.getData().subscribe(posts => (this.posts = posts));
      });
  }
  openAddCardPopup() {
    this.dialogRef = this.dialog.open(AddCardPopupComponent);

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const fd = new FormData();
        fd.append("file", result.newImg, result.newImg.name);
        fd.append("title", result.newTitle);
        fd.append("description", result.newDesc);
        this.postDataService.addData(fd).subscribe(post => {
          console.log(post);
          this.postDataService
            .getData()
            .subscribe(posts => (this.posts = posts));
        });
      }
    });
  }
  isAuth() {
    return this.authService.isLoggedIn();
  }
}

