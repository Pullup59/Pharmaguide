import { Component, inject, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../../model/product/product.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../../../../service/product-service/product.service';
import { ProductPostRequest } from '../../../../model/product/product-post/product-post-request.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edition-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './product-edition-dialog.component.html',
  styleUrl: './product-edition-dialog.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProductEditionDialogComponent implements OnInit, OnDestroy {

  isLoading = true;

  productObject: Product;

  form: any;

  editMode: boolean = false;

  postProductRequest!: ProductPostRequest;

  subscriptions: Subscription[] = [];

  readonly dialogRef = inject(MatDialogRef<ProductEditionDialogComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
      public router: Router, 
      public productService : ProductService,
      private fb: FormBuilder) 
  {
    this.productObject = data.dataKey;
    this.editMode = data.modeFlag;
    console.log(this.productObject);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      Name: [this.productObject.name ?? '', Validators.required],
      Cip: [this.productObject.cip ?? 0, (Validators.required, Validators.pattern(/^[0-9]*$/))],
      Dci: [this.productObject.dci ?? '', Validators.required],
      Dosage: [this.productObject.dosage ?? '', Validators.required]
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  closeDialog() {
    this.dialogRef.close();
  }

  confirm() {
    if (this.form.valid) {
      this.postProductRequest = {
        name: this.form.value.Name,
        cip: this.form.value.Cip,
        dci: this.form.value.Dci,
        dosage: this.form.value.Dosage
      }
      this.postProductHandler();
    }
  }

  postProductHandler(): void {
    this.subscriptions.push(
      this.productService.createProduct(this.postProductRequest).subscribe({
        error: (err) => console.log(<any>err),
        complete: () => this.dialogRef.close(true)
      })
    );
  }

}
