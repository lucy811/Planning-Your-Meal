import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material.module';
import { AppRoutingModule } from '../app-routing.module';

import { PreparationListService } from '../preparation-list/preparation-list.service';
import { DishService } from '../dishes/dish.service';
import { DataStorageService } from '../shared/data-storage.service';
import { ContactUsService } from '../contact-us/contact-us.service';
import { AuthService } from '../../app/auth/auth.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    MaterialModule,
    AppRoutingModule,
    CommonModule,
    TranslateModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    PreparationListService,
    DishService,
    DataStorageService,
    ContactUsService,
    AuthService
  ]
})

export class CoreModule { }
