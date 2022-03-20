import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessCreationLayerComponent } from './success-creation-layer.component';

describe('SuccessCreationLayerComponent', () => {
  let component: SuccessCreationLayerComponent;
  let fixture: ComponentFixture<SuccessCreationLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessCreationLayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessCreationLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
