import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';
import { SigninComponent } from './signin.component';
import { LoginCreateComponent } from './login-create/login-create.component';

@NgModule({
  declarations: [
    LoginCreateComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SigninComponent, pathMatch: 'full' },
      { path: 'create', component: LoginCreateComponent, pathMatch: 'full' },
    ]),
  ],
  providers: [
    LoginService,
  ],
})
export class LoginModule { }
