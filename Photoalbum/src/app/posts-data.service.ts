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
     getData(): Observable<PostsData[]> {
        return this.http.get<PostsData[]>(this.postsUrl);
     }
     //addData( img: string, title: string,  description: string,  rate: number){}
     addData(post: PostsData): Observable<PostsData>{
         return this.http.post<PostsData>(this.postsUrl, post, httpOptions);
     }
     deleteData(id: number): Observable<{}>{
         let url = `${this.postsUrl}/${id}`;
         console.log(url);
         return this.http.delete(url, httpOptions);
     }

     editData(post: PostsData){
        let url = `${this.postsUrl}/${post.id}`;
       return this.http.put(url,post,httpOptions);
     }


     private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}