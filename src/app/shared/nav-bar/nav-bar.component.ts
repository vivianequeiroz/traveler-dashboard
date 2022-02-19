import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCreateProfile(): void {
    console.log('teste routing');
    this.router.navigate(['/createProfile']);
  }
}
