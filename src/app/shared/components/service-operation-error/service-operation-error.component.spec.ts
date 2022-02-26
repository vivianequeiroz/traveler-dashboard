import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOperationErrorComponent } from './service-operation-error.component';

describe('ServiceOperationErrorComponent', () => {
  let component: ServiceOperationErrorComponent;
  let fixture: ComponentFixture<ServiceOperationErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOperationErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOperationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
