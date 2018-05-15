import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CommentsService } from '../comments.service';

@Component({
  selector: "app-new-comment",
  templateUrl: "./new-comment.component.html",
  styleUrls: ["./new-comment.component.css"]
})
export class NewCommentComponent implements OnInit {
  @Input() post;
  @Output() commentText = new EventEmitter();
  comment: { postId: any; text: any };
  isShowedInput: boolean;
  constructor() {}

  ngOnInit() {}

  addComment(event) {
    this.comment = {
      postId: this.post.id,
      text: event.text
    };
    this.commentText.emit(this.comment);

    this.isShowedInput = false;
  }
  showCommentInput() {
    this.isShowedInput = !this.isShowedInput;
  }
}
