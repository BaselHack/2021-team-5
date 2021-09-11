import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Response } from '../../app/models/response';



@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  responseList:Response[];
  selectedResult?: Response;

  constructor(private service: SearchService) {
    this.responseList = [];
   }

  ngOnInit(): void {

  this.getSearchResults();

  }

  getSearchResults() : void {
    this.service.getSearchResults().subscribe(searchResults => {
      this.responseList = searchResults;
    });
  } 

  onSelect(response: Response): void {
    this.selectedResult = response
  }
}
