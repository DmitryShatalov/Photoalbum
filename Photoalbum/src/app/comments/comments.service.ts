import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

@Injectable()
export class CommentsService {
  constructor(private http: HttpClient) {}
  private postsUrl = "http://localhost:3000/";
  addComment(comment) {
    return this.http.post(this.postsUrl + "comments", comment);
  }

  getCommentsByPhotoId(id: number) {
    let url = `${this.postsUrl + "comments/getCommentsByPhotoId"}/${id}`;
    return this.http.get(url, httpOptions);
  }

  editComments(comment) {
    //let url = `${this.postsUrl + "comments"}/${id}`;
    return this.http.put(this.postsUrl + "comments", comment);
  }

  deleteCommentById(id: number) {
    let url = `${this.postsUrl + "comments/deleteCommentById"}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  getCommentById(id: number){
    let url = `${this.postsUrl + "comments/getCommentById"}/${id}`;
    return this.http.get(url, httpOptions);
  }
}