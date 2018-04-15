import { PostsData } from './../../posts-data';
import { Component, OnInit } from '@angular/core';
import {PostsDataService} from '../../posts-data.service';
@Component({
  selector: 'app-allphotos',
  templateUrl: './allphotos.component.html',
  styleUrls: ['./allphotos.component.css'],
})
export class AllphotosComponent implements OnInit {
  postCardsCount : PostsData[] ;
  rate = 3;
  title = 'app';
  constructor(private postDataService: PostsDataService) { }

  ngOnInit() {
      this.postDataService.getData().subscribe(posts => this.postCardsCount = posts);
      console.log(this.postCardsCount);
  }
  
}
