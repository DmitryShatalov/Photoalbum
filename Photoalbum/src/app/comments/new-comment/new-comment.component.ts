import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
  @Input() post;
  @Output() commentText = new EventEmitter();
  comment: { postId: any; text: any; };
  commentsForm: FormGroup;
  isShowedInput: boolean;
  constructor() { }


  ngOnInit() {
    this.commentsForm = new FormGroup({
      comment: new FormControl(null, [
        Validators.required,
        Validators.maxLength(200),
        Validators.minLength(1)
      ])
    });
  }

  addComment() {
    this.comment = {
      postId: this.post.id,
      text: this.commentsForm.value.comment
    };
    this.commentText.emit(this.comment);
    //this.commentsService.addComment(this.comment).subscribe(res => {
      //console.log(res);
   // });
    this.commentsForm.reset();
    this.commentsForm.markAsUntouched();
    this.commentsForm.markAsPristine();
    this.isShowedInput = false;
  }
  showCommentInput() {
    this.isShowedInput = !this.isShowedInput;
  }

}
