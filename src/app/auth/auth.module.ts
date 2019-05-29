import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { MaterialModule } from '../shared/material.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    FormsModule,
    MaterialModule,
    CommonModule,
    AuthRoutingModule,
    TranslateModule
  ]
})
export class AuthModule { }
