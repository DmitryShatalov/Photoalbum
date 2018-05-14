import { RatingsService } from './../../ratings/ratings.service';
import { AuthService } from './../../shared-module/services/auth.service';
import {PostsData} from '../../shared-module/posts-data';
import { Component, OnInit } from '@angular/core';
import {PostsDataService} from '../../shared-module/services/posts-data.service';
@Component({
  selector: "app-allphotos",
  templateUrl: "./allphotos.component.html",
  styleUrls: ["./allphotos.component.css"]
})
export class AllphotosComponent implements OnInit {
  rating;
  posts: PostsData[];
  rate = 3;
  title = "app";
  constructor(
    private postDataService: PostsDataService,
    private authService: AuthService,
    private ratingsService: RatingsService
  ) {}

  ngOnInit() {
    this.postDataService.getAllPhotos().subscribe(posts => (this.posts = posts));
  }
  isAuth() {
    // console.log(this.authService.isLoggedIn());
    return this.authService.isLoggedIn();
  }
  addRating(rating, post) {
    this.rating = {
      photoId: post.id,
      rating: rating
    };
    console.log(this.rating);
    this.ratingsService.addRaiting(this.rating).subscribe(res => res);
  }
}
