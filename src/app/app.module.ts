import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { HeaderComponent } from './header/header.component';
import { PreparationListComponent } from './preparation-list/preparation-list.component';
import { DishListComponent } from './dishes/dish-list/dish-list.component';
import { DishItemComponent } from './dishes/dish-list/dish-item/dish-item.component';
import { DishDetailComponent } from './dishes/dish-detail/dish-detail.component';
import { PreparationEditComponent } from './preparation-list/preparation-edit/preparation-edit.component';
import { PreparationListService } from './preparation-list/preparation-list.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DishStartComponent } from './dishes/dish-start/dish-start.component';
import { DishEditComponent } from './dishes/dish-edit/dish-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    HeaderComponent,
    PreparationListComponent,
    DishListComponent,
    DishItemComponent,
    DishDetailComponent,
    PreparationEditComponent,
    DishStartComponent,
    DishEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PreparationListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
