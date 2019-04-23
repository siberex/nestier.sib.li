import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserLoggedGuard } from '../guards/user-logged.guard';
import { BookService } from '../services/book.service';
import { BookAddComponent } from './book-add/book-add.component';
import { BooksComponent } from './books.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookAddComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BooksComponent, pathMatch: 'full'},
      { path: 'add', canActivate: [UserLoggedGuard], component: BookAddComponent, pathMatch: 'full'},
    ]),
  ],
  providers: [
    BookService,
  ],
})
export class BooksModule { }
