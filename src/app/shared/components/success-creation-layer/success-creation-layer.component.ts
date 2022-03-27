import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-creation-layer',
  templateUrl: './success-creation-layer.component.html',
  styleUrls: ['./success-creation-layer.component.scss'],
})
export class SuccessCreationLayerComponent implements OnInit {
  @Input() showSuccessLayer!: boolean;
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.showSuccessLayer) {
      setTimeout(() => {
        this.showSuccessLayer = false;
        this.router.navigate(['/home']);
      }, 1000);
    }
  }
}
