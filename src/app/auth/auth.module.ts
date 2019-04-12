import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    FormsModule,
    MaterialModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }