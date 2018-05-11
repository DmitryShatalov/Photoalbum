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
  @Input() post; //Удалить
  @Output() postEmmiter = new EventEmitter();
  constructor(private postDataService: PostsDataService) {}

  ngOnInit() {
    //this.postDataService.getData().subscribe(posts => this.posts = posts);
    //console.log(this.post);
  }

  /* addRating(){
    this.postEmmiter.emit()
  } */
}
