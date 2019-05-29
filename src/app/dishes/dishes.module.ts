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
import { BetterHighlightDirective } from '../shared/better-highlight.directive';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DishesComponent,
    DishListComponent,
    DishItemComponent,
    DishDetailComponent,
    DishStartComponent,
    DishEditComponent,
    BetterHighlightDirective
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    DishesRoutingModule,
    TranslateModule
  ]
})

export class DishesModule { }
