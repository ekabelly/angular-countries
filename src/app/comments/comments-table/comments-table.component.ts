import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../models/comment.model';
import 'rxjs/Rx';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-comments-table',
  templateUrl: './comments-table.component.html',
  styleUrls: ['./comments-table.component.css']
})
export class CommentsTableComponent implements OnInit {
  data: boolean = false;
  fields: string[];
  comments: Comment[];
  filteredComments: Comment[];
  filterStr: string = '';
  filterField: string = 'email';
  maxRows: number = 10;
  currentPage: number = 1;
  sort: { dir: string, field: string } = {dir: 'down', field: 'poastId'}

  constructor(private commentsService: CommentsService, private filterService: FilterService) { }

  ngOnInit() {
    this.commentsService.fetchComments().subscribe((data) =>{
      this.comments = data;
      this.filteredComments = data;
      this.fields = Object.keys(this.comments[0]);
      this.data = true;
    });
  }

  filter(e){
    this.filteredComments = this.filterService.transform([...this.comments], e.target.value, this.filterField);
  }

  changePage(e){
    if(e.location === 'comments-table'){
      this.currentPage = e.page;
    }
  }

  sortHTMLClasses(field: string){
    return this.sort.dir === 'up' && this.sort.field === field ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down';
  }

  onSort(field: string){
    this.sort = {dir: this.sort.dir === 'down' ? 'up' : 'down', field};
    if(this.sort.dir === 'up') return this.filteredComments.sort((a,b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0));
    return this.filteredComments.sort((a, b) => (b[field] > a[field]) ? 1 : ((a[field] > b[field]) ? -1 : 0));
  }
}
