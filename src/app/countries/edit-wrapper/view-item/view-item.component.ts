import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  country;

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.emitCountry.subscribe((data)=>{
      this.country = data.country;
    });
    this.country = this.countriesService.currentCountry.data;
  }

}
