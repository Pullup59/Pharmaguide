import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Prescription } from '../../model/prescription/prescription.model';
import { catchError, Observable, throwError, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PrescriptionProductData } from '../../model/prescription/prescription-product-data/prescription-product-data.model';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  url = environment.apiUrl + 'prescriptions';

  constructor(private http: HttpClient) { }

  getById(id: number) : Observable<Prescription> {
    const getIdUrl = `${this.url}/${id}`;
    return this.http.get<Prescription>(getIdUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAll() : Observable<Prescription[]> {
    return this.http.get<Prescription[]>(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getDetailsById(id: number) : Observable<PrescriptionProductData> {
    return this.http.get<Prescription>(`${this.url}/${id}/details`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    console.error(err);
    return throwError(() => err.error);
  }
}
