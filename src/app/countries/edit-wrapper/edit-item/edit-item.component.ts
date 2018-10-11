import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  country;
  id: number;
  form: FormGroup;

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.emitCountry.subscribe((data)=>{
      this.country = data.country;
      this.id = data.id;
      this.form = new FormGroup({
        'name': new FormControl(this.country.name, Validators.required),
        'region': new FormControl(this.country.region, Validators.required)
      });
    });
    this.country = this.countriesService.currentCountry.data;
    this.id = this.countriesService.currentCountry.id;
    this.form = new FormGroup({
      'name': new FormControl(this.country.name, Validators.required),
      'region': new FormControl(this.country.region, Validators.required)
    });
  }

  onSubmit(){
    this.country.name = this.form.get('name').value;
    this.country.region = this.form.get('region').value;
    this.countriesService.patchCountry(this.id, this.country);
  }

  onDelete(){
    debugger;
    this.form.reset();
    this.countriesService.newForm.emit('new');
    this.countriesService.removeCountry(this.id);
  }

}
