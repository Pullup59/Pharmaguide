import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Prescription } from '../../model/prescription/prescription.model';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  url = environment.apiUrl + 'prescriptions';

  constructor(private http: HttpClient) { }

  getById(id: number) : Observable<Prescription> {
    return this.http.get<Prescription>(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    console.error(err);
    return throwError(() => err.error);
  }
}
