import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-creation-layer',
  templateUrl: './success-creation-layer.component.html',
  styleUrls: ['./success-creation-layer.component.scss'],
})
export class SuccessCreationLayerComponent implements OnInit {
  @Input() successLayer?: boolean;
  constructor() {}

  ngOnInit(): void {}
}
