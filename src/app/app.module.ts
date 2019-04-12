import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { PreparationListService } from './preparation-list/preparation-list.service';
import { DishService } from './dishes/dish.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from '../app/auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { PreparationListModule } from './preparation-list/preparation-list.module';
import { AuthModule } from '../app/auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    PreparationListModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [PreparationListService, DishService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
