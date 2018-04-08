import { Component, OnInit } from '@angular/core';
import {PostsDataService} from '../posts-data.service';
import {PostsData} from '../posts-data';
@Component({
  selector: 'app-allphotos',
  templateUrl: './allphotos.component.html',
  styleUrls: ['./allphotos.component.css'],
  providers: [PostsDataService]
})
export class AllphotosComponent implements OnInit {
  rate = 3;
  title = 'app';
  constructor(private postDataService: PostsDataService) { }

  ngOnInit() {
  }
  postCardsCount = this.postDataService.getData();
}
