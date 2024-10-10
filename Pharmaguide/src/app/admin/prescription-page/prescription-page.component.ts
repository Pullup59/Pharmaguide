import { Component, HostListener, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Prescription } from '../../model/prescription/prescription.model';
import { PrescriptionService } from '../../service/prescription-service/prescription.service';
import { Subscription } from 'rxjs';
import { MatCommonModule } from '@angular/material/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prescription-page',
  standalone: true,
  imports: [
    MatCommonModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  templateUrl: './prescription-page.component.html',
  styleUrl: './prescription-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PrescriptionPageComponent implements OnDestroy {

  isLoading = false;

  fetchedPrescriptions: Prescription[] = [];
  
  dataSource = new MatTableDataSource<Prescription, MatPaginator>();

  displayedColumns: string[] = ['id', 'date'];

  paginator!: MatPaginator;

  sort!: MatSort;

  subscriptions: Subscription[] = [];

  innerHeight!: number;

  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.updateHeight();
    }

  constructor(public prescriptionService : PrescriptionService) {}

  ngOnInit(): void {
    this.updateHeight();
      this.subscriptions.push(
        this.prescriptionService.getAll().subscribe({
          next: (products) =>{
            this.fetchedPrescriptions = products;
            this.dataSource.data = this.fetchedPrescriptions;
          } ,
          error: (err) => console.log(<any>err),
          complete: () => this.isLoading = true
        })
      );
  }

  updateHeight() {
    this.innerHeight = window.innerHeight;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe);
  }

  track() {
    
  }

}
