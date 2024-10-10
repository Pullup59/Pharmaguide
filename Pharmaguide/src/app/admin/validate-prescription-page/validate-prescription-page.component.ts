import { Component, ViewEncapsulation } from '@angular/core';
import { Prescription } from '../../model/prescription/prescription.model';
import { PrescriptionService } from '../../service/prescription-service/prescription.service';
import { Subscription } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

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
  prescription: Prescription | null = null;
  subscriptions: Subscription[] = [];

  constructor(public prescriptionService : PrescriptionService) {}

  ngOnInit(): void {
    this.prescriptionService.getDetailsById(1).subscribe({
      next: (data) => this.prescription = data,
      error: (err) => console.error('Error fetching prescription details', err)
    })
    console.log(this.prescription);
  }

  // this.subscriptions.push(
  //   this.prescriptionService.getById().subscribe({
  //     next: (products) =>{
  //       this.fetchedProducts = products
  //       this.dataSource.data = this.fetchedProducts;
  //     } ,
  //     error: (err) => console.log(<any>err),
  //     complete: () => this.isLoading = true
  //   })
  // );
}
