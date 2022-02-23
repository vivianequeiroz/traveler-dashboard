import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-city-basic-data-forms',
  templateUrl: './city-basic-data-forms.component.html',
  styleUrls: ['./city-basic-data-forms.component.scss'],
})
export class CityBasicDataFormsComponent implements OnInit {
  cityForm!: FormGroup;
  formsTitle: string = 'City information';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildCityForm();
  }

  buildCityForm() {
    this.cityForm = this.formBuilder.group({
      cityName: 'Test',
      cityPhoto: '',
      cityDescription: '',
    });
  }
}
