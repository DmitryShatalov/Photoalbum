import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-comment-input",
  templateUrl: "./comment-input.component.html",
  styleUrls: ["./comment-input.component.css"]
})
export class CommentInputComponent implements OnInit {
  comment: { isShowedInput: any; text: any };
  commentText: string;
  isFormInvalid: boolean = true;
  isShowedInput: boolean;
  commentInputForm: FormGroup;
  @Output() sendComment = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.commentInputForm = new FormGroup({
      commentControl: new FormControl(null, [
        // Validators.required,
        Validators.maxLength(200),
        Validators.minLength(1)
      ])
    });
  }
  addComment() {
    this.comment = {
      text: this.commentInputForm.value.commentControl,
      isShowedInput: (this.isShowedInput = false)
    };
    this.sendComment.emit(this.comment);
    this.commentInputForm.reset();
  }

  onCheckLength() {
    if (this.commentText) {
      this.isFormInvalid = false;
    } else this.isFormInvalid = true;
  }
}
