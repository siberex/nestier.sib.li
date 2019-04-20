import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

// @fixme Remove debug
const DEBUG_API_URL = 'https://nestier.sib.li/api/books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nestier';

  books: Observable<any>;

  constructor(private http: HttpClient) {
    this.books = this.http.get(DEBUG_API_URL);
  }

}
