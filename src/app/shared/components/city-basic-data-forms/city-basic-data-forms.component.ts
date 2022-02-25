import { CityService } from './../../../services/city/city-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { City } from 'src/app/models/City';

@Component({
  selector: 'app-city-basic-data-forms',
  templateUrl: './city-basic-data-forms.component.html',
  styleUrls: ['./city-basic-data-forms.component.scss'],
})
export class CityBasicDataFormsComponent implements OnInit {
  cityForm!: FormGroup;

  city!: City;

  formsTitle: string = 'City information';
  subscription!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    this.buildCityForm();
  }

  buildCityForm() {
    this.cityForm = this.formBuilder.group({
      cityName: '',
      cityPhoto: '',
      cityDescription: '',
    });
  }

  saveCity(): void {
    const city = { ...this.city, ...this.cityForm.value };

    this.subscription = this.cityService
      .createCity(city)
      .subscribe((response) => console.log(response));
    console.log(city);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
