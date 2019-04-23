import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoggedGuard } from './guards/user-logged.guard';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', loadChildren: './books/books.module#BooksModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'favorites', canActivate: [UserLoggedGuard], loadChildren: './favorites/favorites.module#FavoritesModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
