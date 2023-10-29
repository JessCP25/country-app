import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { retry, switchMap } from 'rxjs';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{
  constructor(
    private activedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ){}

  country: Country[] = [];

    ngOnInit(): void {
      this.activedRoute.params
      .pipe(
        switchMap(({id})=> this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe((country)=>{
        if(!country) {
          return this.router.navigateByUrl('');
        }
        return;
      })
    }
}
