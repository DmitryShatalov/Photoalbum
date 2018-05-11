import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments-wrapper',
  templateUrl: './comments-wrapper.component.html',
  styleUrls: ['./comments-wrapper.component.css']
})
export class CommentsWrapperComponent implements OnInit {

  @Input() post;
  
  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
  }

  addComment(comment){
    this.commentsService.addComment(comment).subscribe(res => {
      this.commentsService.getCommentsByPhotoId(this.post.photoId).subscribe(res => console.log(res))
    })
  }
}
