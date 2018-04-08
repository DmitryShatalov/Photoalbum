import { Component, OnInit } from '@angular/core';
import {BarRatingModule} from 'ngx-bar-rating'
@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  myRating = 2;
  fullRating = 3;
  constructor() { }

  ngOnInit() {
  }

}
