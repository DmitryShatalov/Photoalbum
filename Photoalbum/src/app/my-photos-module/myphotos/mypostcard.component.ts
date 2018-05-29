import { Observable } from 'rxjs/Observable';
import {PostsData} from '../../shared-module/posts-data';
import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Input} from '@angular/core';
import {PostsDataService} from '../../shared-module/services/posts-data.service';
import { AddCardPopupComponent } from '../../shared-module/popups/add-card-popup/add-card-popup.component'
import { MatDialogRef, MatDialog } from '@angular/material';
import { EditCardPopupComponent } from '../../shared-module/popups/edit-card-popup/edit-card-popup.component';
import { DeleteCardPopupComponent } from '../../shared-module/popups/delete-card-popup/delete-card-popup.component';

@Component({
  selector: "app-mypostcard",
  templateUrl: "./mypostcard.component.html",
  styleUrls: ["./mypostcard.component.css"]
})
export class MypostcardComponent implements OnInit {
  @Input() post;
  posts;
  isPostUpdated: boolean = false;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() addRatingEmitter = new EventEmitter();
  editedPost;
  editComponent: EditCardPopupComponent;
  dialogRef: MatDialogRef<EditCardPopupComponent>;
  constructor(
    public dialog: MatDialog,
    private postsDataService: PostsDataService
  ) {}

  ngOnInit() {}
  onDelete() {
    
    let dialogRef = this.dialog.open(DeleteCardPopupComponent, {
      data: {posts: this.posts, post: this.post}

    });
    
    dialogRef.afterClosed().subscribe(result => {
     // console.log(result);
      this.delete.emit(result);
    });
 
  }
  addRating(rating) {
    this.addRatingEmitter.emit(rating);
  }
  openEditCardPopup() {
    this.dialogRef = this.dialog.open(EditCardPopupComponent,{
      data: {
        post: this.post
      }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.editedPost = result;

        if (this.editedPost.editedTitle === undefined) {
          this.editedPost.editedTitle = this.post.title;
        }
        if (this.editedPost.editedDesc === undefined) {
          this.editedPost.editedDesc = this.post.description;
        }
        this.editedPost.id = this.post.id;
        this.edit.emit(this.editedPost);
       // console.log(this.post)
      }
    });
  }
}
