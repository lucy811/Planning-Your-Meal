import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DishesComponent } from './dishes.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishItemComponent } from './dish-list/dish-item/dish-item.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { DishStartComponent } from './dish-start/dish-start.component';
import { DishEditComponent } from './dish-edit/dish-edit.component';
import { DishesRoutingModule } from './dishes-routing.module';
import { MaterialModule } from '../shared/material.module';
import { StoreModule } from '@ngrx/store';
import { dishReducer } from './store/dish.reducers';

@NgModule({
  declarations: [
    DishesComponent,
    DishListComponent,
    DishItemComponent,
    DishDetailComponent,
    DishStartComponent,
    DishEditComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    DishesRoutingModule,
    StoreModule.forFeature('dishes', dishReducer),
  ]
})

export class DishesModule { }
