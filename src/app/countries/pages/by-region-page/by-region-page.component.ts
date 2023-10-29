import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {

  constructor(
    private countriesService: CountriesService
  ){}

  countries: Country[] = []

  byRegion(region: string){
    this.countriesService.searchRegion(region)
    .subscribe(countries => this.countries = countries)
  }
}
