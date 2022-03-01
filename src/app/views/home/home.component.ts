import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import { BehaviorSubject, combineLatest, EMPTY } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { City } from 'src/app/models/City';
import { CityService } from 'src/app/services/city/city.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  @Output() errorMessage!: string;
  selectedCity$ = this.cityService.selectedCity$;

  cities$ = this.cityService.cities$;

  constructor(private cityService: CityService) {}

  onSelected(cityById: number) {
    this.cityService.onSelectedCity(cityById);
    console.log('test', this.selectedCity$);
  }
}
