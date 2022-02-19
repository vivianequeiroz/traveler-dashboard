import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFormsComponent } from './header-forms.component';

describe('HeaderFormsComponent', () => {
  let component: HeaderFormsComponent;
  let fixture: ComponentFixture<HeaderFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
