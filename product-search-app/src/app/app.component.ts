import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Product Search';



  fileName = '';
  private url = '/api/v1/product-search';

  constructor(private http: HttpClient) {}

  onFileSelected(event:any) {
    console.log('on file selected');
    const file:File = event.target.files[0];
    console.log(file);


      if (file) {

          this.fileName = file.name;

          const formData = new FormData();

          formData.append("thumbnail", file);

          const upload$ = this.http.post(this.url, formData);
upload$.pipe(catchError(this.handleError(this.url, [])));
          upload$.subscribe();
      }
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
