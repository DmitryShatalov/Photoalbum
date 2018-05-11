import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../../comments/comments.service';

@Component({
  selector: "app-comments-list",
  templateUrl: "./comments-list.component.html",
  styleUrls: ["./comments-list.component.css"]
})
export class CommentsListComponent implements OnInit {
  @Input() post;
  //commentsForm: FormGroup;
  // isShowedInput: boolean = false;
  isShowedComments: boolean = false;
  isEditable: boolean = false;
  //comment;
  photoComments: string[];
  constructor(private commentsService: CommentsService) {}

  ngOnInit() {}

  showHideComments() {
    this.isShowedComments = !this.isShowedComments;
  }

  editComment(event) {
    console.log(event);
    this.commentsService.editComments(event).subscribe(res => {
      let comment = this.photoComments.find(x => x["id"] == event.commentId);
      let commentIndex = this.photoComments.indexOf(comment);
      this.photoComments.fill(
        (comment["text"] = event.text),
        commentIndex,
        commentIndex++
      );
      this.isEditable = event.isEditable;
    });
  }
  isCommentEditable() {
    this.isEditable = !this.isEditable;
  }
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
        //console.log(res);
        this.photoComments = res;
      });
  }
}

