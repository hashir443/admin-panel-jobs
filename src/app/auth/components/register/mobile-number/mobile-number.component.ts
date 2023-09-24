import { Component, OnInit } from '@angular/core';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';

@Component({
  selector: 'ngx-mobile-number',
  templateUrl: './mobile-number.component.html',
  styleUrls: ['./mobile-number.component.scss','../../login/login.component.scss']
})
export class MobileNumberComponent implements OnInit {

  preferredCountries: CountryISO[] = [CountryISO.Pakistan];
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;

  constructor() { }

  ngOnInit(): void {
  }

}
