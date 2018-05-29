import { DeleteCardPopupComponent } from "./../../shared-module/popups/delete-card-popup/delete-card-popup.component";
import { RatingsService } from "./../../ratings/ratings.service";
import { Observable } from "rxjs/Observable";
import { PostsData } from "../../shared-module/posts-data";
import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";
import { PostsDataService } from "../../shared-module/services/posts-data.service";
import { AddCardPopupComponent } from "../../shared-module/popups/add-card-popup/add-card-popup.component";
import { AuthService } from "./../../shared-module/services/auth.service";

@Component({
  selector: "app-myphotos",
  templateUrl: "./myphotos.component.html",
  styleUrls: ["./myphotos.component.css"],
  providers: [AddCardPopupComponent]
})
export class MyphotosComponent implements OnInit {
  orderByDefault: boolean = true;
  posts;
  newPost;
  rating;
  postSort;

  constructor(
    public dialog: MatDialog,
    private postDataService: PostsDataService,
    private authService: AuthService,
    private ratingsService: RatingsService
  ) {}

  ngOnInit() {
    this.postDataService.getData().subscribe(posts => {
      this.posts = posts;
      this.orderByDate();
    });
    this.isAuth();
  }

  orderByAlpabet() {
    this.posts.sort((a, b) => {
      return new Intl.Collator().compare(
        a.title.toLocaleLowerCase(),
        b.title.toLocaleLowerCase()
      );
    });
  }
  orderByDate() {
    this.posts.sort((a, b) => {
      if (Date.parse(a.uploadDate) < Date.parse(b.uploadDate)) return 1;
      else if (Date.parse(a.uploadDate) > Date.parse(b.uploadDate)) return -1;
      else return 0;
    });
  }

  deleteMyPost(event, post: PostsData) {
    if (event) {
      this.postDataService.deleteData(post.id).subscribe(res => {
        this.posts = this.posts.filter(p => p.id !== post.id);
      });
    }
  }

  addRating(rating, post) {
    this.rating = {
      photoId: post.id,
      rating: rating
    };
    //console.log(this.rating);
    this.ratingsService
      .addRaiting(this.rating)
      .subscribe(res => res);
  }
  editMyPost(editedPost) {
    let imageUrl = editedPost.editedImg;
    let title = editedPost.editedTitle;
    let description = editedPost.editedDesc;
    let id = editedPost.id;
    this.postDataService
      .editData({ id, imageUrl, title, description } as PostsData)
      .subscribe(res => {
       // console.log(res);
        this.postDataService.getData().subscribe(posts => {
          this.posts = posts;
          this.orderByDate();
        });
      });
  }
  openAddCardPopup() {
    let dialogRef: MatDialogRef<AddCardPopupComponent>;
    dialogRef = this.dialog.open(AddCardPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const fd = new FormData();
        fd.append("file", result.newImg, result.newImg.name);
        fd.append("title", result.newTitle);
        fd.append("description", result.newDesc);
        this.postDataService.addData(fd).subscribe(post => {
          //console.log(post);
          this.postDataService.getData().subscribe(posts => {
            this.posts = posts;
            this.orderByDate();
          });
        });
      }
    });
  }
  isAuth() {
    return this.authService.isLoggedIn();
  }
}
