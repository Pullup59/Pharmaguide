import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../model/product/product.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  url = environment.apiUrl + 'Products';

  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<Product[]> {

    return this.http.get<Product[]>(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    console.error(err);
    return throwError(() => err.error);
  }
}
