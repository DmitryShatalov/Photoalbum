import { Injectable } from '@angular/core';
import {PostsData} from './posts-data'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import  'rxjs/operators/map';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable()
export class PostsDataService {

    private postsUrl = 'http://localhost:3000/posts';
constructor(private http: HttpClient){

}
     getData(){
        return this.http.get<PostsData[]>(this.postsUrl);
     }
     addData(post: PostsData) {
         return this.http.post<PostsData>(this.postsUrl, post, httpOptions);
     }
     deleteData(id: number){
         let url = `${this.postsUrl}/${id}`;
         return this.http.delete(url, httpOptions);
     }

     editData(post: PostsData){
        let url = `${this.postsUrl}/${post.id}`;
       return this.http.put(url,post,httpOptions);
     }

}