import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IStyle } from '../interfaces/style';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class StyleService {
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  public getStyles(): Observable<IStyle[]> {
    return this.httpClient
      .get<IStyle[]>('/styles')
      .pipe(retry(3), catchError(this.errorService.handleError));
  }
}
