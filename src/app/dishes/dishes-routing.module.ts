import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { DishesComponent } from './dishes.component';
import { DishStartComponent } from './dish-start/dish-start.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { DishEditComponent } from './dish-edit/dish-edit.component';

const dishesRoutes: Routes = [
  { path: '', component: DishesComponent, children: [
    { path: '', component: DishStartComponent },
    { path: 'new', component: DishEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: DishDetailComponent },
    { path: ':id/edit', component: DishEditComponent, canActivate: [AuthGuard] }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(dishesRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class DishesRoutingModule { }
