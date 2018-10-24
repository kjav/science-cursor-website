import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThesisModel } from '../models/thesis-model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ThesisService {
  private apiUrl = 'api/theses';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getTheses(): Observable<ThesisModel[]> {
    return this.http.get<ThesisModel[]>(this.apiUrl).pipe(
      tap(_ => this.log('fetched theses')), catchError(this.handleError('getTheses', [])));
  }

  getHighlightedTheses(): Observable<ThesisModel[]> {
    return this.http.get<ThesisModel[]>(this.apiUrl).pipe(
      map(theses => theses.slice(0, 6)),
      tap(_ => this.log('fetched theses')), catchError(this.handleError('getTheses', [])));
  }

  getThesis(id: number): Observable<ThesisModel> {
    const url = `${this.apiUrl}/?id=${id}`;
    return this.http.get<ThesisModel[]>(url).pipe(
        map(theses => theses[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} thesis id=${id}`);
        }),
        catchError(this.handleError<ThesisModel>(`getThesis id=${id}`))
      );
  }

  searchTheses(term: string): Observable<ThesisModel[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<ThesisModel[]>(`${this.apiUrl}/?title=${term}`).pipe(
      tap(_ => this.log(`found theses matching "${term}"`)),
      catchError(this.handleError<ThesisModel[]>('searchTheses', [])));
  }

  addThesis(thesis: ThesisModel): Observable<ThesisModel> {
    return this.http.post<ThesisModel>(this.apiUrl, thesis, httpOptions).pipe(
      tap((thesis: ThesisModel) => this.log(`added thesis with id=${thesis.id}`)),
      catchError(this.handleError<ThesisModel>('addThesis'))
    );
  }

  updateThesis(thesis: ThesisModel): Observable<any> {
    return this.http.put(this.apiUrl, thesis, httpOptions).pipe(
      tap(_ => this.log(`updated thesis id=${thesis.id}`)), catchError(this.handleError<any>('updateThesis')));
  }

  deleteThesis(thesis: ThesisModel | number): Observable<ThesisModel> {
    const id = typeof thesis === 'number' ? thesis : thesis.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<ThesisModel>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted thesis id=${id}`)), catchError(this.handleError<ThesisModel>('deleteThesis')));
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
