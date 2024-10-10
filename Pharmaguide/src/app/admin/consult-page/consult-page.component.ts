import { Component, inject, OnDestroy, OnInit, viewChild, ViewChild, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../service/product-service/product.service';
import { Subscription } from 'rxjs';
import { Product } from '../../model/product/product.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { ProductEditionDialogComponent } from './product-edition-dialog/product-edition-dialog/product-edition-dialog.component';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-consult-page',
  standalone: true,
  imports: [
    MatCommonModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatInputModule
  ],
  templateUrl: './consult-page.component.html',
  styleUrl: './consult-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ConsultPageComponent implements OnInit, OnDestroy {

  readonly dialog = inject(MatDialog);

  sort!: MatSort;

  paginator!: MatPaginator;
  
  isLoading: boolean = false;
  
  fetchedProducts: Product[] = [];
  
  subscriptions: Subscription[] = [];
  
  displayedColumns: string[] = ['name', 'dci', 'dosage'];
  
  dataSource = new MatTableDataSource<Product, MatPaginator>();

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
      this.paginator = mp;
      this.setDataSourceAttributes();
  }

  constructor(public router: Router, public productService : ProductService) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  loadData(): void {
    this.subscriptions.push(
      this.productService.getAllProducts().subscribe({
        next: (products) =>{
          this.fetchedProducts = products
          this.dataSource.data = this.fetchedProducts;
        } ,
        error: (err) => console.log(<any>err),
        complete: () => this.isLoading = true
      })
    );
  }

  setDataSourceAttributes() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }

  
  productDetail(id: number) {
    this.router.navigate([`${'/app/product-detail'}/${id}`]);
  }

  openEditDialog(event: any = undefined, isEditMode: boolean) {
     const dialogRef = this.dialog.open(ProductEditionDialogComponent, {
      restoreFocus: false,
      width: '70vh',
      height: '70vh',
      data: {
        modeFlag: isEditMode,
        dataKey: event
      }
    });
    dialogRef.afterClosed().subscribe(res => this.loadData());
    // #enddocregion focus-restoration
  }
}
