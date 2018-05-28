import { CommentsService } from './comments.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CommentsDataService {

  photoComments: any;
  constructor(private commentsService:CommentsService) { 
    
  }

  getPhotoComments(id) {
   this.commentsService.getCommentsByPhotoId(id).subscribe(res => {
     console.log(res)
   })
    return this.photoComments;
  }
  addPhotoComment(comment) {
    this.commentsService.addComment(comment).subscribe(res => {
     
   })
  }

}
