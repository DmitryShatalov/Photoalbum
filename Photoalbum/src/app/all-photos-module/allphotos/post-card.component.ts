import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {BarRatingModule} from 'ngx-bar-rating';
import { Input} from '@angular/core';
import {PostsDataService} from '../../shared-module/services/posts-data.service';
import {PostsData} from '../../shared-module/posts-data';

@Component({
  selector: "app-post-card",
  templateUrl: "./post-card.component.html",
  styleUrls: ["./post-card.component.css"]
})
export class PostCardComponent implements OnInit {
  @Input() post; 
  @Output() addRatingEmmiter = new EventEmitter();
  constructor(private postDataService: PostsDataService) {}

  ngOnInit() {
  }

   addRating(rating){
    this.addRatingEmmiter.emit(rating)
  } 
}
