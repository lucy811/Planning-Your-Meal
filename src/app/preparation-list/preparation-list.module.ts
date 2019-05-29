import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PreparationListComponent } from './preparation-list.component';
import { PreparationEditComponent } from './preparation-edit/preparation-edit.component';
import { MaterialModule } from '../shared/material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PreparationListComponent,
    PreparationEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    TranslateModule
  ]
})
export class PreparationListModule { }
