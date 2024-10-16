import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from '../../model/product/product.model';
import { ProductPostRequest } from '../../model/product/product-post/product-post-request.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.apiUrl + 'products';

  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  createProduct(product: ProductPostRequest) : Observable<Product> {
    return this.http.post<Product>(this.url, product)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    console.error(err);
    return throwError(() => err.error);
  }
}
