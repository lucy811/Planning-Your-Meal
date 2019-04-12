import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { PreparationListComponent } from './preparation-list/preparation-list.component';
import { PreparationEditComponent } from './preparation-list/preparation-edit/preparation-edit.component';
import { PreparationListService } from './preparation-list/preparation-list.service';
import { DishService } from './dishes/dish.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from '../app/auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { DishesModule } from './dishes/dishes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreparationListComponent,
    PreparationEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    DishesModule,
    AppRoutingModule
  ],
  providers: [PreparationListService, DishService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
