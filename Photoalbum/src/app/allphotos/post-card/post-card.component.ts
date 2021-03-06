import { Component, OnInit } from '@angular/core';
import {BarRatingModule} from 'ngx-bar-rating';
import { Input} from '@angular/core';
import {PostsDataService} from '../../posts-data.service';
import {PostsData} from '../../posts-data';
@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() index;
  posts: PostsData[] = [];
  myRating = 2;
  fullRating = 3;
  constructor(private postDataService: PostsDataService) { }

  ngOnInit() {
    this.posts = this.postDataService.getData();
  }

}
