import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-profile-forms',
  templateUrl: './create-profile-forms.component.html',
  styleUrls: ['./create-profile-forms.component.scss'],
})
export class CreateProfileFormsComponent implements OnInit {
  cityForm!: FormGroup;

  addProfilePageStep: string = '01';
  addCityText: string = 'Add a city';
  formsTitle: string = 'City information';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildCityForm();
  }

  buildCityForm() {
    this.cityForm = this.formBuilder.group({
      cityName: '',
      createCity: '',
      cityDescription: '',
    });
  }
}
