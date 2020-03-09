import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  // @ts-ignore
  private comments: Comment[];

  constructor(private http: HttpClient) { }

  fetchComments(): Observable<Comment[]> {
    return this.comments ? this.commentObservable() : this.http.get('https://jsonplaceholder.typicode.com/comments')
    .map((data: Comment[]) => {
      console.log({data});
      this.comments = data;
      return data;
    });
  }

  commentObservable(): Observable<Comment[]> {
    return new Observable(observer => {
      observer.next(this.comments);
      return {
        unsubscribe() {}
      };
    });
  }
}
