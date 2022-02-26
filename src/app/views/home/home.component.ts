import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/City';
import { CityService } from 'src/app/services/city/city-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cities$!: Observable<City[]> | undefined;

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.listAllCities();
  }

  listAllCities(): void {
    console.log(this.cities$);
    this.cities$ = this.cityService.listAll();
    console.log(this.cities$);
  }
}
