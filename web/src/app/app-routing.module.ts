import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserLoggedGuard } from './guards/user-logged.guard';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books/:start', component: BooksComponent },
  { path: 'favorites', canActivate: [UserLoggedGuard], component: FavoritesComponent, pathMatch: 'full' },
  { path: 'sign-in', component: SigninComponent, pathMatch: 'full' },
  { path: 'sign-up', component: SignupComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
