import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  constructor(
    private countriesService: CountriesService
  ){}

  countries: Country[] = [];

  byCapital(term: string){
    this.countriesService.searchCapital(term)
    .subscribe(countries=> this.countries = countries);
  }
}