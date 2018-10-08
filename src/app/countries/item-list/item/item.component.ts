import { Component, OnInit, Input } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('data') country;
  @Input() id: number;

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
  }

  itemSelected(){
    this.countriesService.countrySelected(this.id);
  }
}
