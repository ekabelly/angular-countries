import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../../models/comment.model';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {
  @Input() id: number;
  @Input() comment: Comment;

  constructor() { }

  ngOnInit() {
  }

}
