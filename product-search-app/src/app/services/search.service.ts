import { Injectable } from '@angular/core';
import { RESPONSE_LIST } from '../mock-results';
import { Response } from '../../app/models/response';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { SearchResult } from '../models/searchResult';


@Injectable({
  providedIn: 'root' // this means it is a singleton
})
export class SearchService {

  // private url = 'api/product-search';
  private url = 'http://localhost:3000/product-search';


  constructor(private messageService: MessageService, private http: HttpClient) { }

  getSearchResults(file: File): Observable<SearchResult[]> {
    /*
    const r = of(RESPONSE_LIST);
    this.messageService.add('fetched search results');
    return r;
    */

    const formData = new FormData();

    formData.append("thumbnail", file);

    const upload$ = this.http.post<Response[]>(this.url, formData)
    .pipe(      catchError(this.handleError<Response[]>(this.url, []))    );

    console.log('posted');

    return upload$.pipe(
      map((responseList:Response[]) => responseList.map(response => this.getResult(response))),
    );

  }

  private getResult(response: Response): SearchResult {
    console.log("displayName:" + response.displayName);
    let splits = response.displayName.split('|');
    let name = splits.length > 0 ? splits[0] : response.displayName;
    let id = splits.length > 1 ? splits[1] : response.displayName;
    let url = `https://coop.ch/p/${id}#`;
   // let imageUrl = getImageUrl(name);
    let imageUrl1 = `https://storage.googleapis.com/training_pictures/${id}_360_23-S.JPG`;
    let imageUrl2 = `https://storage.googleapis.com/training_pictures/${id}_360_23-S-0.JPG`;
    return new SearchResult(name, response.productCategory, url, imageUrl1, imageUrl2);
  }
/*
  private getImageUrl(string name) : Observable<string> {
    let uri1 = `https://vision.googleapis.com/v1/projects/emerald-mission-325710/locations/europe-west1/products/${name}/referenceImages`;


  }*/

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