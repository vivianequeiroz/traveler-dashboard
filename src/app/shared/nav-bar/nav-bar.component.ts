import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() isCitiesPage!: boolean;
  @Input() addProfile: boolean = true;
  @Output() cityProfile: boolean = false;
  @Output() placeProfile: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCreateProfile(): void {
    console.log('teste routing');
    this.router.navigate(['/createProfile']);
    this.addProfile = false;
  }

  goToHome(): void {
    console.log('Teste go home');
    this.router.navigate(['/home']);
    this.addProfile = true;
  }
}
