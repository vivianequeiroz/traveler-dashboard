import { Component, OnInit, Output } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { City } from 'src/app/models/City';
import { CityService } from 'src/app/services/city/city-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cities$!: Observable<City[]> | undefined;
  @Output() errorMessage!: string;

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.listAllCities();
  }

  listAllCities(): void {
    console.log(this.cities$);
    this.cities$ = this.cityService.listAll().pipe(
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY; // an empty observable
      })
    );
    console.log(this.cities$);
  }
}
