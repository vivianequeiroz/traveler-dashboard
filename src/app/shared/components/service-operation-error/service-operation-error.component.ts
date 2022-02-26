import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-operation-error',
  templateUrl: './service-operation-error.component.html',
  styleUrls: ['./service-operation-error.component.scss'],
})
export class ServiceOperationErrorComponent implements OnInit {
  @Input() errorMessage: string = '';
  constructor() {}

  ngOnInit(): void {}
}
