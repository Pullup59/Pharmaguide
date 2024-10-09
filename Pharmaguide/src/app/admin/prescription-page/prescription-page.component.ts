import { Component, ViewEncapsulation } from '@angular/core';
import { Prescription } from '../../model/prescription/prescription.model';
import { PrescriptionService } from '../../service/prescription-service/prescription.service';
import { Subscription } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-prescription-page',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './prescription-page.component.html',
  styleUrl: './prescription-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PrescriptionPageComponent {

  fetchedPrescriptions: Prescription[] = [];
  subscriptions: Subscription[] = [];

  constructor(public prescriptionService : PrescriptionService) {}

  ngOnInit(): void {
    
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
