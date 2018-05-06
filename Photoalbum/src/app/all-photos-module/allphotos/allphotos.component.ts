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
  posts: PostsData[];
  rate = 3;
  title = "app";
  constructor(
    private postDataService: PostsDataService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.postDataService.getAllPhotos().subscribe(posts => (this.posts = posts));
  }
  isAuth() {
    // console.log(this.authService.isLoggedIn());
    return this.authService.isLoggedIn();
  }
}
