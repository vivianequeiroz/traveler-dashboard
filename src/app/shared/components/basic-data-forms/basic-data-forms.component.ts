import { CityService } from '../../../services/city/city.service';
import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EMPTY, Subscription } from 'rxjs';
import { City } from 'src/app/models/City';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-basic-data-forms',
  templateUrl: './basic-data-forms.component.html',
  styleUrls: ['./basic-data-forms.component.scss'],
})
export class BasicDataFormsComponent implements OnInit, OnDestroy {
  basicDataForms!: FormGroup;
  city!: City;
  subscription!: Subscription;

  @Input() targetEntityType!: City;
  @Input() formsTitle: string = 'Add a profile';
  @Output() isCreateForm: boolean = true;
  @Output() errorMessage!: string;

  constructor(
    private formBuilder: FormBuilder,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    this.buildbasicDataForm();
    this.isCreateForm = this.formsTitle.includes('Add');
  }

  buildbasicDataForm() {
    this.basicDataForms = this.formBuilder.group({
      name: '',
      photo: '',
      description: '',
    });
  }

  saveBasicDataForms(): void {
    const targetEntityToSave = {
      ...this.targetEntityType,
      ...this.basicDataForms.value,
    };

    const isCityForms = typeof this.targetEntityType === typeof this.city;

    if (isCityForms) {
      this.subscription = this.cityService
        .create(targetEntityToSave)
        .pipe(
          catchError((err) => {
            this.errorMessage = err;
            return EMPTY; // an empty observable
          })
        )
        .subscribe((response) => console.log(response));
      console.log(targetEntityToSave);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
