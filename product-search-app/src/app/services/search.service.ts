import { Injectable } from '@angular/core';
import { RESPONSE_LIST } from '../mock-results';
import { Response } from '../../app/models/response';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root' // this means it is a singleton
})
export class SearchService {

  constructor() { }

  getSearchResults(): Observable<Response[]>{
    const r = of(RESPONSE_LIST);
    return r;
  }

}
