import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDataFormsComponent } from './basic-data-forms.component';

describe('BasicDataFormsComponent', () => {
  let component: BasicDataFormsComponent;
  let fixture: ComponentFixture<BasicDataFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicDataFormsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDataFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
