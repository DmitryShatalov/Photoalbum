import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {
  @Input() comm;// Чекнуть и убрать помоему лишнее
  @Output() commentText = new EventEmitter();
  comment: { commentId: any; text: any; isEditable: boolean};
  editForm: any;
  constructor() { }

  ngOnInit() {
    this.editForm = new FormGroup({
      comment: new FormControl(null, [
        Validators.required,
        Validators.maxLength(200),
        Validators.minLength(1)
      ])
    });
  }
 
  editComment(){
    this.comment = {
      commentId: this.comm.id,
      text: this.editForm.value.comment,
      isEditable: false
    };
    console.log(this.comment);
  this.commentText.emit(this.comment);
  /*   this.comment = {
      commentId: this.comm.id,
      text: this.editForm.value.comment
    };
    this.commentsService.editComments(this.comment).subscribe(res => console.log(res));*/
  } 
  
}
