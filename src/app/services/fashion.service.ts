import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { omit } from 'lodash';
import { IFashion } from '../interfaces/fashion';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class FashionService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public getFashions(): Observable<IFashion[]> {
    return this.httpClient
      .get<IFashion[]>('/fashions')
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public getFashion(id: string): Observable<IFashion> {
    return this.httpClient
      .get<IFashion>(`/fashions/${id}`)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public createFashion(fashion: IFashion): Observable<IFashion> {
    return this.httpClient
      .post<IFashion>('/fashions', fashion)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public updateFashion(fashion: IFashion): Observable<void> {
    return this.httpClient
      .put<void>(`/fashions/${fashion.id}`, omit(fashion, 'id'))
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public deleteFashion(id: string): Observable<void> {
    return this.httpClient
      .delete<void>(`/fashions/${id}`)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }
}
