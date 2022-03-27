import { Injectable } from '@angular/core';
import { Observable, throwError, combineLatest, BehaviorSubject } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { City } from 'src/app/models/City';

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private citiesUrl = 'api/cities';
  private citySelectedSubject = new BehaviorSubject<number>(0);
  citySelectedSubject$ = this.citySelectedSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  cities$ = this.http.get<City[]>(this.citiesUrl).pipe(
    tap((cities: City[]) => console.log(JSON.stringify(cities))),
    catchError(this.handleError)
  );

  selectedCity$ = combineLatest([this.cities$, this.citySelectedSubject$]).pipe(
    map(
      ([cities, selectedCityId]) =>
        cities.find((city) => city.id === selectedCityId),
      tap(() => console.log('cidades!'))
    )
  );

  create(city: City): Observable<City> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(city, 'service');

    return this.http.post<City>(this.citiesUrl, city, { headers }).pipe(
      tap((city: City) => console.log('createCity: ' + JSON.stringify(city))),
      catchError(this.handleError)
    );
  }

  // listAll(): Observable<City[]> {
  //   console.log('listing all cities service');
  //   return this.http.get<City[]>(this.citiesUrl).pipe(
  //     tap((cities: City[]) => console.log(JSON.stringify(cities))),
  //     catchError(this.handleError)
  //   );
  // }

  onSelectedCity(cityById: number) {
    console.log('help jesus');

    this.citySelectedSubject.next(+cityById);
    console.log(this.selectedCity$);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMessage);
  }
}
