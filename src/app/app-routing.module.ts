import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { PreparationListComponent } from './preparation-list/preparation-list.component';
import { HomeComponent } from './core/home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dishes', loadChildren: './dishes/dishes.module#DishesModule'},
  { path: 'preparation-list', component: PreparationListComponent },
  { path: 'contact-us', component: ContactUsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})

export class AppRoutingModule { }
