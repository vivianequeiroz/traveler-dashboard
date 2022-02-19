import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-profile-forms',
  templateUrl: './create-profile-forms.component.html',
  styleUrls: ['./create-profile-forms.component.scss'],
})
export class CreateProfileFormsComponent implements OnInit {
  addProfilePageStep: string = '01';
  addCityText: string = 'Add a city';

  constructor() {}

  ngOnInit(): void {}
}
