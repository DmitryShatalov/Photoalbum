import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentsService } from '../comments.service';

@Component({
  selector: "app-edit-comment",
  templateUrl: "./edit-comment.component.html",
  styleUrls: ["./edit-comment.component.css"]
})
export class EditCommentComponent implements OnInit {
  @Input() comm; // Чекнуть и убрать помоему лишнее
  @Output() commentText = new EventEmitter();
  comment: { text: any, commentId: number};
  editForm: any;
  constructor() {}

  ngOnInit() {}

  editComment(event) {
    this.comment = {
       commentId: this.comm.id,
      text: event.text,
    };
    this.commentText.emit(this.comment);
  }
}
