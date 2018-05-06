import { Observable } from 'rxjs/Observable';
import {PostsData} from '../../shared-module/posts-data';
import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Input} from '@angular/core';
import {PostsDataService} from '../../shared-module/services/posts-data.service';
import { AddCardPopupComponent } from '../../shared-module/popups/add-card-popup/add-card-popup.component'
import { MatDialogRef, MatDialog } from '@angular/material';
import { EditCardPopupComponent } from '../../shared-module/popups/edit-card-popup/edit-card-popup.component';

@Component({
  selector: "app-mypostcard",
  templateUrl: "./mypostcard.component.html",
  styleUrls: ["./mypostcard.component.css"]
})
export class MypostcardComponent implements OnInit {
  @Input() post;
  posts;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  editComponent: EditCardPopupComponent;
  dialogRef: MatDialogRef<EditCardPopupComponent>;
  editedPost;
  today: number = Date.now();
  constructor(
    public dialog: MatDialog,
    private postsDataService: PostsDataService
  ) {}

  onDelete() {
    this.delete.emit();
  }

  ngOnInit() {
    //this.postsDataService.getData().subscribe(posts => this.posts = posts);
  }

  openEditCardPopup() {
    this.dialogRef = this.dialog.open(EditCardPopupComponent);
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.editedPost = result;
        this.editedPost.id = this.post.id;
        this.edit.emit(this.editedPost);
      }
    });
  }
}
