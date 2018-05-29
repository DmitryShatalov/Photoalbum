import { Subject } from 'rxjs/Subject';
import { CommentsService } from './comments.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



const mySubject = new Subject();

@Injectable()
export class CommentsDataService {
  photoComments: any;
  constructor(private commentsService:CommentsService) { 
    
  }

  getPhotoComments(id) {
    return mySubject;
  }
  addPhotoComment(comment) {
    
    this.commentsService.addComment(comment).subscribe(res => {
      mySubject.next(comment);
   })
  }

}
