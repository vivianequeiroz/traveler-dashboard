import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfileFormsComponent } from './create-profile-forms.component';

describe('CreateProfileFormsComponent', () => {
  let component: CreateProfileFormsComponent;
  let fixture: ComponentFixture<CreateProfileFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfileFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfileFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
