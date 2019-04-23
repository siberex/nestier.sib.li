import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';
import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SigninComponent, pathMatch: 'full' },
      { path: 'create', component: SignupComponent, pathMatch: 'full' },
    ]),
  ],
  providers: [
    LoginService,
  ],
})
export class LoginModule { }
