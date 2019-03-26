import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [ MatButtonModule,
             MatCheckboxModule,
             MatGridListModule,
             MatToolbarModule,
             MatListModule,
             MatMenuModule,
             MatDatepickerModule,
             MatFormFieldModule,
             MatNativeDateModule,
             MatInputModule ],

  exports: [ MatButtonModule,
             MatCheckboxModule,
             MatGridListModule,
             MatToolbarModule,
             MatListModule,
             MatMenuModule,
             MatDatepickerModule,
             MatFormFieldModule,
             MatNativeDateModule,
             MatInputModule ],
})
export class MaterialModule { }
