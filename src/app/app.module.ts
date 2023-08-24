import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {  HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BaseURLInterceptor } from './core/interceptors/base-url.service';
import { HttpErrorInterceptor } from './core/interceptors/http-error.service';
import { DatabaseInterceptor } from './core/interceptors/database.interceptor';
import { HttpLoadingInterceptor } from './core/interceptors/http-loading.service';
import { HomeModule } from './modules/home/home.module';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { UsuariosDesactivosModule } from './modules/usuarios-desactivos/usuarios-desactivos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    UsuariosDesactivosModule,
    DialogModule,
    FormsModule,
    DropdownModule,
    ToastModule

  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: BaseURLInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: DatabaseInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true,
    },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
