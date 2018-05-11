import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class RatingsService {
  private postsUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  addRaiting(rating){
    return this.http.post(this.postsUrl + "rating", rating);
  }
}
