import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../models/comment.model';
import 'rxjs/Rx';

@Component({
  selector: 'app-comments-table',
  templateUrl: './comments-table.component.html',
  styleUrls: ['./comments-table.component.css']
})
export class CommentsTableComponent implements OnInit {
  data: boolean = false;
  fields: string[];
  comments: Comment[];
  filterStr: string = '';
  filterField: string = 'email';

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.commentsService.fetchComments().subscribe((data) =>{
      this.comments = data;
      this.fields = Object.keys(this.comments[0]);
      this.data = true;
    });
  }

}
