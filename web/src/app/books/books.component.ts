import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// @fixme Remove debug
const DEBUG_API_URL = 'https://nestier.sib.li/api/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {

  books: Observable<any>;

  constructor(private http: HttpClient) {
    this.books = this.http.get(DEBUG_API_URL);
  }

  ngOnInit() {
  }

}
