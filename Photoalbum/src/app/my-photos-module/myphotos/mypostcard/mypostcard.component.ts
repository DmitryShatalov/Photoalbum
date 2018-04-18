import { Observable } from 'rxjs/Observable';
import { PostsData } from './../../../posts-data';
import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Input} from '@angular/core';
import {PostsDataService} from '../../../posts-data.service';
import { AddCardPopupComponent } from '../../../shared-module/popups/add-card-popup/add-card-popup.component'
import { MatDialogRef, MatDialog } from '@angular/material';
import { EditCardPopupComponent } from '../../../shared-module/popups/edit-card-popup/edit-card-popup.component';

@Component({
  selector: 'app-mypostcard',
  templateUrl: './mypostcard.component.html',
  styleUrls: ['./mypostcard.component.css'],
})
export class MypostcardComponent implements OnInit {
  @Input() post;
  //posts: PostsData[];
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  editComponent: EditCardPopupComponent;
  dialogRef: MatDialogRef<EditCardPopupComponent>;
  editedPost;
  today: number = Date.now();
  constructor(public dialog: MatDialog, private postsDataService: PostsDataService) { }
  
  onDelete(){
   this.delete.emit();
  }

  ngOnInit() {
    //this.postsDataService.getData().subscribe(posts => this.posts = posts);
  }

  openEditCardPopup(id){
    this.dialogRef = this.dialog.open(EditCardPopupComponent, {
      data: {
        id: id,
      }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      this.editedPost = result;
      this.editedPost.id = this.post.id;
      this.edit.emit(this.editedPost);
    }); 
  }
}
