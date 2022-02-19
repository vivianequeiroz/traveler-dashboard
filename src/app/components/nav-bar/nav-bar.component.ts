import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Output() citiesPage: boolean = true;
  @Output() addProfile: boolean = true;
  @Output() cityProfile: boolean = false;
  @Output() placeProfile: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
