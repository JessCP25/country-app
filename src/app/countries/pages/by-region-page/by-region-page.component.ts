import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent implements OnInit{

  constructor(
    private countriesService: CountriesService
  ){}

  countries: Country[] = []
  regions: Region[] = ['Africa' , 'Americas' , 'Asia' , 'Europe' , 'Oceania'];
  regionSelected?: Region;

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.regionSelected = this.countriesService.cacheStore.byRegion.region;
  }

  byRegion(region: Region){
    this.regionSelected = region;
    this.countriesService.searchRegion(region)
    .subscribe(countries => this.countries = countries)
  }
}
