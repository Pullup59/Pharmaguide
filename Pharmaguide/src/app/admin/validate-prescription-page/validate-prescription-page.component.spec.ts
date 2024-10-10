import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatePrescriptionPageComponent } from './validate-prescription-page.component';

describe('ValidatePrescriptionPageComponent', () => {
  let component: ValidatePrescriptionPageComponent;
  let fixture: ComponentFixture<ValidatePrescriptionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidatePrescriptionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatePrescriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
