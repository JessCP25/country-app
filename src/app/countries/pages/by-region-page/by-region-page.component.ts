import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {

  constructor(
    private countriesService: CountriesService
  ){}

  countries: Country[] = []
  regions: Region[] = ['Africa' , 'Americas' , 'Asia' , 'Europe' , 'Oceania'];
  regionSelected?: Region;

  byRegion(region: Region){
    this.regionSelected = region;
    this.countriesService.searchRegion(region)
    .subscribe(countries => this.countries = countries)
  }
}
