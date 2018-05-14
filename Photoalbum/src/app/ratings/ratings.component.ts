import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RatingsService } from './ratings.service';


@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  //@Input() post;
  @Output() ratingEmitter = new EventEmitter();
  //rating: {};
  fullRating;
  myRating
  constructor(private raitingsService: RatingsService) { }

  ngOnInit() {
  }

  addRaiting(){
   // this.rating = {
     // photoId: this.post.id,
     // raiting: this.myRating
  //  }
  this.ratingEmitter.emit(this.myRating);
    //console.log(this.post);
  }
}
