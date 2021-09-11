import { Injectable } from '@angular/core';
import { RESPONSE_LIST } from '../mock-results';
import { Response } from '../../app/models/response';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root' // this means it is a singleton
})
export class SearchService {

  constructor(private messageService: MessageService) { }

  getSearchResults(): Observable<Response[]>{
    const r = of(RESPONSE_LIST);
    this.messageService.add('fetched search results');
    return r;
  }

}
