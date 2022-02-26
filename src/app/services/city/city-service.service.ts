import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { City } from 'src/app/models/City';

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private citiesUrl = 'api/cities';

  constructor(private http: HttpClient) {}

  create(city: City): Observable<City> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(city, 'service');

    return this.http.post<City>(this.citiesUrl, city, { headers }).pipe(
      tap((city: City) => console.log('createCity: ' + JSON.stringify(city))),
      catchError(this.handleError)
    );
  }

  listAll(): Observable<City[]> {
    console.log('listing all cities service');
    return this.http.get<City[]>(this.citiesUrl).pipe(
      tap((cities: City[]) => console.log(JSON.stringify(cities))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => console.log(errorMessage));
  }
}
