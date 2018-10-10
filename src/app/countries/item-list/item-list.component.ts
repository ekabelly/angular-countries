import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  data;
  currentPage: number = 1;

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.fetchCountries();
  }

  fetchCountries(){
    this.countriesService.fetchCountries().subscribe((data)=>
      this.data = data);
  }

  changePage(e){
    if(e.location === 'country-list'){
      this.currentPage = e.page;
    }
  }
}
