import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Prescription } from '../../model/prescription/prescription.model';
import { PrescriptionService } from '../../service/prescription-service/prescription.service';
import { Subscription } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../model/product/product.model';
import { PrescriptionProductData } from '../../model/prescription/prescription-product-data/prescription-product-data.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-validate-prescription-page',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    CommonModule
  ],
  templateUrl: './validate-prescription-page.component.html',
  styleUrl: './validate-prescription-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ValidatePrescriptionPageComponent {

  prescriptionData: PrescriptionProductData | null = null;

  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, public prescriptionService : PrescriptionService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      var parseId: number = +id;
      this.prescriptionService.getDetailsById(parseId).subscribe({
        next: (data) => {
          this.prescriptionData = data
        },
        error: (err) => console.error('Error fetching prescription details', err)
      })
    }
  }
}
