import { AuthService } from "./../../shared-module/services/auth.service";
import { UserService } from "./../../users-module/user.service";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { CommentsService } from "../../comments/comments.service";
import { UsersDataService } from "../../shared-module/services/users-data.service";
import { CommentsDataService } from "../comments-data.service";

@Component({
  selector: "app-comments-list",
  templateUrl: "./comments-list.component.html",
  styleUrls: ["./comments-list.component.css"]
})
export class CommentsListComponent implements OnInit {
  @Input() post;
  @Input() isAllPostsPage;
  @Output() showCommentsEmitter = new EventEmitter();
  currentUserId;
  orderByDefault: boolean = true;
  isNoComment: boolean = false;
  isComment: boolean = false;
  isShowedComments: boolean = false;
  isLoading: boolean = true;
  isEditable = [];
  photoComments = [];
  mySubj;

  isCurrentUserComment = [];
  constructor(
    private commentsDataService: CommentsDataService,
    private commentsService: CommentsService,
    private userService: UserService,
    private usersDataService: UsersDataService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    //console.log(this.commentsDataService.getPhotoComments(this.post)) ;
    if (this.authService.isLoggedIn()) {
      this.usersDataService.getCurrentUser().subscribe(res => {
        this.currentUserId = res["id"];
      });
    }
    //  this.commentsService.currentMessage.subscribe(message => console.log(message))
  }

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
  addComment(){
    this.mySubj = this.commentsDataService.getPhotoComments(this.post);
    // console.log(mySubj.subscribe(x => console.log(x)));
    this.mySubj.subscribe(x => {
      //this.photoComments.push(x);
      this.showComments();
    }); 
  }
  showComments() {
    //this.photoComments = this.commentsDataService.getPhotoComments(this.post.id);
    //console.log(this.photoComments);
    // this.isLoading = true;
   /*  this.mySubj = this.commentsDataService.getPhotoComments(this.post);
    // console.log(mySubj.subscribe(x => console.log(x)));
    this.mySubj.subscribe(x => {
      //this.photoComments.push(x);

      this.commentsService
        .getCommentsByPhotoId(this.post.id)
        .map(val => {
          return val["comments"];
        })
        .subscribe(res => {
          console.log(res);
          this.photoComments = res;
        });
    }); */

    this.commentsService
      .getCommentsByPhotoId(this.post.id)
      .map(val => {
        return val["comments"];
      })
      .subscribe(res => {
        if (res) this.isLoading = false;
        this.photoComments = res;
        // console.log(this.photoComments);
        this.orderByDate();
        if (this.photoComments.length === 0) {
          this.isNoComment = true;
          this.isComment = false;
        } else {
          this.isNoComment = false;
          this.isComment = true;
        }

        for (let i = 0; i < this.photoComments.length; i++) {
          if (this.photoComments[i].author_id === this.currentUserId) {
            this.isCurrentUserComment[i] = true;
          } else this.isCurrentUserComment[i] = false;
        }
      });
  }

  orderByAlpabet() {
    this.photoComments.sort((a, b) => {
      return new Intl.Collator().compare(
        a.text.toLocaleLowerCase(),
        b.text.toLocaleLowerCase()
      );
    });
  }
  orderByDate() {
    this.photoComments.sort((a, b) => {
      if (Date.parse(a.date) < Date.parse(b.date)) return -1;
      else if (Date.parse(a.date) > Date.parse(b.date)) return 1;
      else return 0;
    });
  }
}
