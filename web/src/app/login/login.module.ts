import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';
import { LoginCreateComponent } from './login-create/login-create.component';
import { SigninComponent } from './signin.component';

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
    FormsModule,
  ],
  providers: [
    LoginService,
  ],
})
export class LoginModule { }
