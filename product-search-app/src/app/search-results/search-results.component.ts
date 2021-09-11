import { Component, OnInit } from '@angular/core';
import { RESPONSE_LIST } from '../mock-results';
import { Response } from '../../app/models/response';



@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  responseList:Response[];
  selectedResult?: Response;

  constructor() {
    this.responseList = [];
   }

  ngOnInit(): void {

  this.responseList=RESPONSE_LIST;

  }

  onSelect(response: Response): void {
    this.selectedResult = response
  }
}
