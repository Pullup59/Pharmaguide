import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../service/product-service/product.service';
import { Subscription } from 'rxjs';
import { Product } from '../../model/product/product.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-consult-page',
  standalone: true,
  imports: [
    MatCommonModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  templateUrl: './consult-page.component.html',
  styleUrl: './consult-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ConsultPageComponent implements OnInit, OnDestroy {

  isLoading: boolean = false;

  fetchedProducts: Product[] = [];

  dataSource = new MatTableDataSource<Product, MatPaginator>();

  displayedColumns: string[] = ['name', 'dci', 'dosage'];
  
  subscriptions: Subscription[] = [];

  paginator!: MatPaginator;

  sort!: MatSort;

  constructor( public productService : ProductService) {}

  ngOnInit(): void {
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
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
