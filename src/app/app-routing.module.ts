import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreparationListComponent } from './preparation-list/preparation-list.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dishes', loadChildren: './dishes/dishes.module#DishesModule'},
  { path: 'preparation-list', component: PreparationListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
