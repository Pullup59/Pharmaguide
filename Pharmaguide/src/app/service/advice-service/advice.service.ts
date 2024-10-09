import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Advice } from '../../model/advice/advice.model';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  url = environment.apiUrl + 'products';

  constructor(private http: HttpClient) { }

  getAllAdvicesByProductId(id: number) : Observable<Advice[]> {
    const getIdUrl = `${this.url}/${id}/${'advices'}`;
    return this.http.get<Advice[]>(getIdUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    console.error(err);
    return throwError(() => err.error);
  }
}
