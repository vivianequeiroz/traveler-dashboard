import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() isCitiesPage: boolean = true;
  @Input() addProfile: boolean = true;
  @Output() cityProfile: boolean = false;
  @Output() placeProfile: boolean = false;
  @Output() pageTitle: string = '';
  @Output() firstStepForms!: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCreateProfile(): void {
    console.log('teste go create profile');
    this.router.navigate(['/createProfile']);
    this.addProfile = false;
    this.pageTitle = 'Add a profile';
    this.firstStepForms = true;
    this.isCitiesPage = false;
  }

  goToHome(): void {
    console.log('Teste go home');
    this.router.navigate(['/home']);
    this.addProfile = true;
    this.pageTitle = '';
    this.firstStepForms = false;
    this.isCitiesPage = true;
  }
}
