import { Injectable } from '@angular/core';
import { RESPONSE_LIST } from '../mock-results';
import { Response } from '../../app/models/response';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root' // this means it is a singleton
})
export class SearchService {

  // private url = 'api/product-search';
  private url = 'http://localhost:3000/product-search';


  constructor(private messageService: MessageService, private http: HttpClient) { }

  getSearchResults(file: File): Observable<Response[]> {
    /*
    const r = of(RESPONSE_LIST);
    this.messageService.add('fetched search results');
    return r;
    */

    const formData = new FormData();

    formData.append("thumbnail", file);

    const upload$ = this.http.post<Response[]>(this.url, formData);

    console.log('posted');

    upload$.pipe(
      tap(x => console.log('length' + x.length)),
      catchError(this.handleError<Response[]>(this.url, []))
    );

    return upload$;
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      alert(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };


  }
}