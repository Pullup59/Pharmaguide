import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditionDialogComponent } from './product-edition-dialog.component';

describe('ProductEditionDialogComponent', () => {
  let component: ProductEditionDialogComponent;
  let fixture: ComponentFixture<ProductEditionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductEditionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductEditionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
