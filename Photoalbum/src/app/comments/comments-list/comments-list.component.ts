import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Input} from '@angular/core';
import { CommentsService } from '../../comments/comments.service';

@Component({
  selector: "app-comments-list",
  templateUrl: "./comments-list.component.html",
  styleUrls: ["./comments-list.component.css"]
})
export class CommentsListComponent implements OnInit {
  @Input() post;
  orderByDefault: boolean = true;
  isNoComment: boolean = false;
  isComment: boolean = false;
  isShowedComments: boolean = false;
  isEditable = [];
  photoComments = [];
  constructor(private commentsService: CommentsService) {}

  ngOnInit() {}

  showHideComments() {
    this.isShowedComments = !this.isShowedComments;
  }

  editComment(event) {
    this.commentsService.editComments(event).subscribe(res => {
      let comment = this.photoComments.find(x => x["id"] == event.commentId);
      let commentIndex = this.photoComments.indexOf(comment);
      this.photoComments.fill(
        (comment["text"] = event.text),
        commentIndex,
        commentIndex++
      );
      this.isEditable[commentIndex - 1] = false;
    });
  }
  isCommentEditable(index) {
    if (!this.isEditable) {
      for (let i = 0; i < this.photoComments.length; i++) {
        this.isEditable[index] = false;
      }
    }

    this.isEditable[index] = !this.isEditable[index];
  }
  deleteComment(id) {
    this.commentsService.deleteCommentById(id).subscribe(res => {
      this.showComments();
    });
  }
  showComments() {
    this.commentsService
      .getCommentsByPhotoId(this.post.id)
      .map(val => {
        return val["comments"];
      })
      .subscribe(res => {
        this.photoComments = res;
        this.orderByDate(); 
        console.log(this.photoComments);
        if (this.photoComments.length === 0) {
          this.isNoComment = true;
          this.isComment = false;
        } else {
          this.isNoComment = false;
          this.isComment = true;
        }
      });
  }

  orderByAlpabet() {
    this.photoComments.sort((a, b) => {
     return new Intl.Collator().compare(a.text.toLocaleLowerCase(), b.text.toLocaleLowerCase());
    });
  }
  orderByDate() {
    this.photoComments.sort((a, b) => {
      if ( Date.parse(a.date)  < Date.parse(b.date)) return -1;
      else if (Date.parse(a.date) > Date.parse(b.date)) return 1;
      else return 0;
    });
  }
}

