import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserLoggedGuard } from '../guards/user-logged.guard';
import { FavoriteService } from '../services/favorite.service';
import { FavoritesComponent } from './favorites.component';

@NgModule({
  declarations: [
    FavoritesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', canActivate: [UserLoggedGuard], component: FavoritesComponent, pathMatch: 'full' },
    ]),
  ],
  providers: [
    FavoriteService,
  ],
})
export class FavoritesModule { }
