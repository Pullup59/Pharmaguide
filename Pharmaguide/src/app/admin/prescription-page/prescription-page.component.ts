import { Component, HostListener, Inject, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { Prescription } from '../../model/prescription/prescription.model';
import { PrescriptionService } from '../../service/prescription-service/prescription.service';
import { Subscription } from 'rxjs';
import { MatCommonModule } from '@angular/material/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(public router: Router, public prescriptionService : PrescriptionService) {}

  ngOnInit(): void {
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

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
}

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
      this.paginator = mp;
      this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      // if (this.paginator && this.sort) {
      //     this.applyFilter('');
      // }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe);
  }

  prescriptionDetail(prescriptionId: number) {
    this.router.navigate([`${'/app/validate-prescription'}/${prescriptionId}`]);
  }

  track() {
    
  }

}
