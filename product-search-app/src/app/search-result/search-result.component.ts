import { Component, OnInit, Input } from '@angular/core';
import { Response } from '../../app/models/response';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() result?:Response;

  constructor() { }

  ngOnInit(): void {
  }

}
