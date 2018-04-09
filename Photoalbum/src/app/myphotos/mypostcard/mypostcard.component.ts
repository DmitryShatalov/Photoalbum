import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import {PostsDataService} from '../../posts-data.service';
import {PostsData} from '../../posts-data';
import { AddCardPopupComponent } from '../../popups/add-card-popup/add-card-popup.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { EditCardPopupComponent } from '../../popups/edit-card-popup/edit-card-popup.component';

@Component({
  selector: 'app-mypostcard',
  templateUrl: './mypostcard.component.html',
  styleUrls: ['./mypostcard.component.css'],
})
export class MypostcardComponent implements OnInit {
  @Input() index;
  editComponent: EditCardPopupComponent;
  dialogRef: MatDialogRef<EditCardPopupComponent>;
  today: number = Date.now();
  posts: PostsData[] = [];
  constructor(public dialog: MatDialog, private postsDataService: PostsDataService) { }
  addPost(img: string, title: string,  description: string,  rate: number){
      this.postsDataService.addData(img, title, description, rate);
  }

  ngOnInit() {
    this.posts = this.postsDataService.getData();
    console.log(this.posts);
  }
  deleteMyPostCard(index){
    this.postsDataService.deleteData(index);
  }
  openEditCardPopup(index){
    this.dialogRef = this.dialog.open(EditCardPopupComponent, {
      data: {
        index: index
      }
    });
    
  }

}
