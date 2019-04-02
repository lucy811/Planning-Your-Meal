import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishesComponent } from './dishes/dishes.component';
import { PreparationListComponent } from './preparation-list/preparation-list.component';
import { DishStartComponent } from './dishes/dish-start/dish-start.component';
import { DishDetailComponent } from './dishes/dish-detail/dish-detail.component';
import { DishEditComponent } from './dishes/dish-edit/dish-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dishes', pathMatch: 'full' },
  { path: 'dishes', component: DishesComponent, children: [
    { path: '', component: DishStartComponent },
    { path: 'new', component: DishEditComponent },
    { path: ':id', component: DishDetailComponent },
    { path: ':id/edit', component: DishEditComponent }
  ]},
  { path: 'preparation-list', component: PreparationListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
