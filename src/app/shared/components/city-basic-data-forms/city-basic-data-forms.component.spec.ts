import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityBasicDataFormsComponent } from './city-basic-data-forms.component';

describe('CityBasicDataFormsComponent', () => {
  let component: CityBasicDataFormsComponent;
  let fixture: ComponentFixture<CityBasicDataFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityBasicDataFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityBasicDataFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
