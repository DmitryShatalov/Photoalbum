import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"]
})
export class CommentsComponent implements OnInit {
  @Input() post;
  commentsForm: FormGroup;
  isShowedInput: boolean = false;
  isShowedComments: boolean = false;
  comment;
  photoComments: string[];
  constructor(private commentsService: CommentsService) {}

  ngOnInit() {
    this.commentsForm = new FormGroup({
      comment: new FormControl(null, [
        Validators.required,
        Validators.maxLength(200),
        Validators.minLength(1)
      ])
    });
  }

  showCommentInput() {
    this.isShowedInput = !this.isShowedInput;
  }
  showHideComments(){
    this.isShowedComments = !this.isShowedComments;
  }
  addComment() {
    this.comment = {
      postId: this.post.id,
      text: this.commentsForm.value.comment
    };
    this.commentsService.addComment(this.comment).subscribe(res => {
      //console.log(res);
    });
    console.log(event);
    this.commentsForm.reset();
    this.commentsForm.markAsUntouched();
    this.commentsForm.markAsPristine();
    this.isShowedInput = false;
  }

  editComment() {}

  deleteComment(id) {
    this.commentsService.deleteCommentById(id).subscribe(res => {
      this.showComments();
    });
  }
  showComments() {
   // this.isShowedComments = !this.isShowedComments;
    this.commentsService
      .getCommentsByPhotoId(this.post.id)
      .map(val => {
        return val["comments"];
      })
      .subscribe(res => {
        console.log(res);
        this.photoComments = res;
      });
  }
}
