import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IAdvanceFashion } from '../interfaces/advance-fashion';
import { IStyle } from '../interfaces/style';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class AdvanceFashionService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public getFashions(style: string = ''): Observable<IStyle[]> {
    return this.httpClient
      .get<IStyle[]>(`/advance-fashions?style=${style}`)
      .pipe(retry(3), catchError(this.errorService.handleError));
  }

  public createFashion(fashion: IAdvanceFashion): Observable<IAdvanceFashion> {
    return this.httpClient
      .post<IAdvanceFashion>('/advance-fashions', fashion)
      .pipe(catchError(this.errorService.handleError));
  }

  public getFashion(id: string): Observable<IAdvanceFashion> {
    return this.httpClient
      .get<IAdvanceFashion>(`/advance-fashions/${id}`)
      .pipe(catchError(this.errorService.handleError));
  }

  public updateFashion(
    fashionId: string,
    fashion: IAdvanceFashion
  ): Observable<void> {
    return this.httpClient
      .put<void>(`/advance-fashions/${fashionId}`, fashion)
      .pipe(catchError(this.errorService.handleError));
  }

  public deleteFashion(fashionId: string): Observable<void> {
    return this.httpClient
      .delete<void>(`/advance-fashions/${fashionId}`)
      .pipe(catchError(this.errorService.handleError));
  }
}
