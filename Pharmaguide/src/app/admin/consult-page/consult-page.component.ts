import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../service/product-service/product.service';
import { Subscription } from 'rxjs';
import { Product } from '../../model/product/product.model';
import { AdviceService } from '../../service/advice-service/advice.service';
import { Advice } from '../../model/advice/advice.model';
import { Prescription } from '../../model/prescription/prescription.model';
import { PrescriptionService } from '../../service/prescription-service/prescription.service';

@Component({
  selector: 'app-consult-page',
  standalone: true,
  imports: [],
  templateUrl: './consult-page.component.html',
  styleUrl: './consult-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ConsultPageComponent implements OnInit {

  isLoading: boolean = false;

  fetchedProducts: Product[] = [];

  public subscriptions: Subscription[] = [];

  constructor( public productService : ProductService, public adviceService : PrescriptionService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.productService.getAllProducts().subscribe({
        next: (products) =>{
          this.fetchedProducts = products
        } ,
        error: (err) => console.log(<any>err),
        complete: () => console.table(this.fetchedProducts)
      })
    );
  }

}
