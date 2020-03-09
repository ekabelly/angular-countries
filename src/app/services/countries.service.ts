import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
emitCountry = new EventEmitter<any>();
newForm = new EventEmitter<string>();
countries;
currentCountry;

  constructor(private http: HttpClient) {}

   fetchCountries() {
     return this.countries ? this.countriesObservable() : this.http.get('https://restcountries.eu/rest/v2/all')
     .map((data) => {
       this.countries = data;
       return this.countries;
     });
   }

   countriesObservable(): Observable<any[]> {
      return new Observable(observer => {
        observer.next(this.countries);

        return {
          unsubscribe() {}
        };
      });
   }

   fetchLocalCountries() {
     return [...this.countries];
   }

   fetchCountry(id: number) {
     return {...this.countries[id]};
   }

   fetchCountryByName(name: string) {
    return this.http.get('https://restcountries.eu/rest/v2/name/' + name)
    .map((country) => {
      this.currentCountry = country;
      return this.currentCountry;
    });
   }

   patchCountry(id: number, country) {
     this.countries[id] = country;
   }

   removeCountry(id) {
    this.countries.splice(id, 1);
   }

   newCountry(country) {
     this.countries.unshift(country);
   }

   countrySelected(id) {
     this.currentCountry = {data: this.countries[id], id };
     this.emitCountry.emit({id: id, country: {...this.countries[id]}});
   }
}
