import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaperRatingModel } from '../models/paper-rating-model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PaperRatingService {
  private apiUrl = 'api/paperRatings';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getRatings(): Observable<PaperRatingModel[]> {
    return this.http.get<PaperRatingModel[]>(this.apiUrl).pipe(
      tap(_ => this.log('fetched ratings')), catchError(this.handleError('getRatings', [])));
  }

  getRating(id: number): Observable<PaperRatingModel> {
    const url = `${this.apiUrl}/?id=${id}`;
    return this.http.get<PaperRatingModel[]>(url).pipe(
        map(ratings => ratings[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} rating id=${id}`);
        }),
        catchError(this.handleError<PaperRatingModel>(`getRating id=${id}`))
      );
  }

  private log(message: string) {
    this.messageService.add(`Thesis Service: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
