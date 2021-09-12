import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchService } from './services/search.service';
import { Response } from '../app/models/response';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Product Search';



  fileName = '';
  // private url = 'api/product-search';
  private url = 'http://localhost:3000/product-search';

  public responseList: Response[];


  constructor(private searchService: SearchService) { 
    this.responseList=[];
  }

  onFileSelected(event: any) {
    console.log('on file selected');
    const file: File = event.target.files[0];
    console.log(file);


    if (file) {

      this.fileName = file.name; 

      this.searchService.getSearchResults(file).subscribe(data => {
        if (data.length > 0) {
          console.log('https://coop.ch/p/' + data[0].displayName + '#');
          this.fileName = '';
        } 
        this.responseList=data;
      }
      );

    }


  }

}
