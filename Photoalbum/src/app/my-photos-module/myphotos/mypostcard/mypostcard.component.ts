
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
  @Input() posts;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  editComponent: EditCardPopupComponent;
  dialogRef: MatDialogRef<EditCardPopupComponent>;
  newPost;
  today: number = Date.now();
   //posts: PostsData[];
  constructor(public dialog: MatDialog, private postsDataService: PostsDataService) { }
  //addPost(img: string, title: string,  description: string,  rate: number){
     // this.postsDataService.addData(img, title, description, rate);
  //}
onDelete(){
   this.delete.emit();
}

onEdit(newPost){
  //console.log(this.newPost.title);
  this.edit.emit(this.newPost);
}
  ngOnInit() {
    this.postsDataService.getData().subscribe(posts => this.posts = posts);
  }

  openEditCardPopup(id){
    this.dialogRef = this.dialog.open(EditCardPopupComponent, {
      data: {
        id: id,
        //test: this.test
      }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      
      this.newPost = result;
      //this.newPost.id = this.post.id;
     // console.log(this.newPost);
    });
  }

}
