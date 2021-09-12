import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchService } from './services/search.service';
import { Response } from '../app/models/response';
import { SearchResult } from './models/searchResult';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Product Search';



  fileName = '';
 // private url = 'api/product-search';
  private url = 'https://emerald-mission-325710.ew.r.appspot.com/product-search';

  public responseList: SearchResult[];


  constructor(private searchService: SearchService) { 
    this.responseList=[];
  }

  onFileSelected(event: any) {
    console.log('on file selected');
    const file: File = event.target.files[0];
    console.log(file);

    this.responseList=[];

    if (file) {

      this.fileName = file.name; 

      this.searchService.getSearchResults(file).subscribe(data => {
        console.log("data:"+data);
        this.responseList=data;
      }
      );

    }


  }

}
