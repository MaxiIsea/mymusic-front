import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { LoginComponent } from './login/login.component';

//declarations: modulos que usa la App
//imports: modulos importados, no implementados por nosotros

@NgModule({
  declarations: [
    AppComponent,                      //componente principal
    PlaylistListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
