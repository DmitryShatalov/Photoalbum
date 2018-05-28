import { CommentsDataService } from './../comments-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments-wrapper',
  templateUrl: './comments-wrapper.component.html',
  styleUrls: ['./comments-wrapper.component.css']
})
export class CommentsWrapperComponent implements OnInit {

  @Input() post;
  currentUserId;
  orderByDefault: boolean = true;
  isNoComment: boolean = false;
  isComment: boolean = false;
  isShowedComments: boolean = false;
  isLoading: boolean = true;
  isEditable = [];
  photoComments = [];
  isCurrentUserComment = [];
  constructor(private commentsService: CommentsService,
    private commentsDataService: CommentsDataService
  ) { }

  ngOnInit() {
  }

  addComment(comment){
    this.commentsDataService.addPhotoComment(comment);
    console.log(this.commentsDataService.getPhotoComments(this.post))
    //this.commentsService.addComment(comment).subscribe(res => {
     // this.commentsService.getCommentsByPhotoId(this.post.photoId).subscribe(res => console.log(res))
    //})
  }
  
}
