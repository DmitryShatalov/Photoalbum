import { PostsData } from './../../../posts-data';
import { Component, OnInit, Input, Inject} from '@angular/core';

import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PostsDataService } from '../../../posts-data.service';
@Component({
  selector: 'app-add-card-popup',
  templateUrl: './add-card-popup.component.html',
  styleUrls: ['./add-card-popup.component.css'],
})
export class AddCardPopupComponent implements OnInit {
  //@Input() posts: PostsData[];
    img: string = "http://www.sketchupjapan.com/podium/images/placeholder-04.png";
    //title:string;
    //desc:string;
constructor(public dialogRef: MatDialogRef<AddCardPopupComponent>, private postDataService:PostsDataService,  @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit() {
  }

  addPost(img: string, title :string,  description: string){  
   
    this.dialogRef.close();
     this.postDataService.addData({img, title, description} as PostsData).subscribe(post => {
       this.data.posts.push(post);
     });
    console.log(this.data.posts)
   
  }
  

    
}
