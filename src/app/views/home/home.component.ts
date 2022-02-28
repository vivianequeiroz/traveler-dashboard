import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import { BehaviorSubject, combineLatest, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CityService } from 'src/app/services/city/city.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  @Output() errorMessage!: string;
  private citySelectedSubject = new BehaviorSubject<number>(0);
  citySelectedSubject$ = this.citySelectedSubject.asObservable(); //exposing to other parts of the app in a secure way

  cities$ = combineLatest([
    this.cityService.cities$,
    this.citySelectedSubject$,
  ]).pipe(
    map(([cities, selectedCityId]) =>
      cities.filter((city) =>
        selectedCityId ? city.id === selectedCityId : true
      )
    ),
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  constructor(private cityService: CityService) {}

  onSelected(cityById: number) {
    this.citySelectedSubject.next(cityById);
  }
}
