import { Component, OnInit, Input, EventEmitter, Output, DoCheck } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, DoCheck {
  @Output() changePage = new EventEmitter<{location: string, page: number}>();
  @Input() data: any[];
  @Input() location: string;
  @Input() maxRows: number;
  pages: number[] = [1];
  currentPage = 1;
  lastPage: number;

  constructor() { }

  ngOnInit() {
    this.lastPage = Math.ceil(this.data.length / this.maxRows);
    this.setPagesDisplay();
  }

  ngDoCheck() {
    this.changeLastPage();
  }

  changeLastPage() {
    this.lastPage = Math.ceil(this.data.length / this.maxRows);
    if (this.lastPage < this.currentPage) {
      this.jumpToPage(this.lastPage);
    }
  }

  jumpToPage(page) {
    if (page > this.lastPage || page < 1) { return; }

    this.currentPage = page;
    this.changePage.emit({location: this.location , page});
    this.setPagesDisplay();
  }

  setPagesDisplay() {

    if (this.currentPage == this.lastPage && this.currentPage > 4) {
      this.pages = [this.currentPage - 4, this.currentPage - 3, this.currentPage - 2, this.currentPage - 1, this.currentPage];
    } else if (this.currentPage == this.lastPage && this.currentPage > 3) {
      this.pages = [this.currentPage - 3, this.currentPage - 2, this.currentPage - 1, this.currentPage];
    } else if (this.currentPage == this.lastPage - 1 && this.currentPage > 3) {
      this.pages = [this.currentPage - 3, this.currentPage - 2, this.currentPage - 1, this.currentPage , this.currentPage + 1];
    } else if (this.currentPage == 1) {
      this.pages = [this.currentPage, this.currentPage + 1, this.currentPage + 2, this.currentPage + 3, this.currentPage + 4];
    } else if (this.currentPage == 2) {
      this.pages = [this.currentPage - 1, this.currentPage, this.currentPage + 1, this.currentPage + 2 , this.currentPage + 3];
    } else {
      this.pages = [this.currentPage - 2, this.currentPage - 1, this.currentPage, this.currentPage + 1, this.currentPage + 2];
    }
  }
}
