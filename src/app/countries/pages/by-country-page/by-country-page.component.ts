import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  constructor(
    private countriesService: CountriesService
  ){}

  countries: Country[] = [];

  byCountry(term: string){
    this.countriesService.searchCountry(term)
    .subscribe(countries => this.countries = countries)
  }

}
