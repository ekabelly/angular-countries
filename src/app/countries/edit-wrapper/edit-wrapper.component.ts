import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-edit-wrapper',
  templateUrl: './edit-wrapper.component.html',
  styleUrls: ['./edit-wrapper.component.css']
})
export class EditWrapperComponent implements OnInit {
  id: number;
  editMode: string = 'new';

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.emitCountry.subscribe((data)=>{
      this.editMode = 'view';
      this.id = data.id;
    });
    this.countriesService.newForm.subscribe((mode: string)=>this.editMode = mode);
  }

}
