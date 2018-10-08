import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  newForm: FormGroup;
  genders: string[] = ['male', 'female'];

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.newForm = new FormGroup({
      'newName': new FormControl(null, Validators.required),
      'newRegion': new FormControl(null, Validators.required),
      'nativeName': new FormControl(null, Validators.required),
      'flag': new FormControl(null),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male', Validators.required)
    });
  }

  onNew(){
    this.newForm.markAsDirty();
    if(this.newForm.valid){
      const { flag, newRegion, newName, nativeName } = this.newForm.value;
      this.countriesService.newCountry({
        name: newName, 
        flag,
        region: newRegion,
        nativeName
      });
      this.newForm.reset();
    }
  }

}
