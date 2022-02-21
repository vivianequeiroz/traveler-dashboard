import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-forms',
  templateUrl: './header-forms.component.html',
  styleUrls: ['./header-forms.component.scss'],
})
export class HeaderFormsComponent implements OnInit {
  @Input() stepNumber: string = '';
  @Input() headerText: string = '';
  constructor(private element: ElementRef) {}

  ngOnInit(): void {}
}
