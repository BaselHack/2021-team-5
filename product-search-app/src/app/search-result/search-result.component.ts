import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SearchResult } from '../../app/models/searchResult';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() result?:SearchResult;

  public safeUrl?: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    if(this.result !== undefined && this.result !== null) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.result.url);
    }

  }

}
