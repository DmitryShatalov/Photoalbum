import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import {PostsDataService} from '../../posts-data.service';
import {PostsData} from '../../posts-data';

@Component({
  selector: 'app-mypostcard',
  templateUrl: './mypostcard.component.html',
  styleUrls: ['./mypostcard.component.css'],
  providers: [PostsDataService]
})
export class MypostcardComponent implements OnInit {
  @Input() index;
  today: number = Date.now();
  posts: PostsData[] = [];
  constructor(private postsDataService: PostsDataService) { }
  addPost(img: string, title: string,  description: string,  rate: number){
      this.postsDataService.addData(img, title, description, rate);
  }

  ngOnInit() {
    this.posts = this.postsDataService.getData();
    console.log(this.posts);
  }

}
