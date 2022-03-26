import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCreationLayerComponent } from './delete-creation-layer.component';

describe('DeleteCreationLayerComponent', () => {
  let component: DeleteCreationLayerComponent;
  let fixture: ComponentFixture<DeleteCreationLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteCreationLayerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCreationLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
