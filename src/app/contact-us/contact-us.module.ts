import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';
import { ContactUsComponent } from './contact-us.component';

@NgModule({
    declarations: [
        ContactUsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
    ],
})

export class ContactUsModule {}
