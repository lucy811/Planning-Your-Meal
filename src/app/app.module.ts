import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactUsModule } from './contact-us/contact-us.module';

import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth-guard.service';
import { PreparationListModule } from './preparation-list/preparation-list.module';
import { AuthModule } from '../app/auth/auth.module';
import { CoreModule } from './core/core.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CoreModule,
    PreparationListModule,
    AuthModule,
    AppRoutingModule,
    ContactUsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
    }})
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
