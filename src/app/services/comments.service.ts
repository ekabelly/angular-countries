import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  fetchComments(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
    .map((data: Comment[]) => {
      console.log(data);
      return data;
    });
  }
}
